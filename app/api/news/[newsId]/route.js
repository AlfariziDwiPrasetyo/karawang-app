import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";
import cloudinary from "@/helper/cloudinary";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getToken } from "next-auth/jwt";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request, { params }) {
  try {
    const user = await prisma.post.findFirstOrThrow({
      where: { id: parseInt(params.newsId) },
    });

    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Post doesnt exist",
      },
      { status: 404 }
    );
  }
}

export async function PUT(request, { params }) {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.json(
      {
        success: false,
        message: "You are not logged in",
      },
      { status: 401 }
    );
  }
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const oldFile = formData.get("oldFile");

    const uploaded = await moveUploadFile(file, "news");

    await cloudinary.uploader.destroy(oldFile);
    const post = await prisma.post.update({
      where: {
        id: parseInt(params.newsId),
      },

      data: {
        url: uploaded.url,
        content: formData.get("content"),
        title: formData.get("title"),
        published: true,
        publicId: uploaded.public_id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Success updated Post",
      data: post,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Post doesnt exist",
      },
      { status: 404 }
    );
  }
}

export async function DELETE(request, { params }) {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.json(
      {
        success: false,
        message: "You are not logged in",
      },
      { status: 401 }
    );
  }
  try {
    const post = await prisma.post.delete({
      where: {
        id: parseInt(params.newsId),
      },
    });

    await cloudinary.uploader.destroy(post.publicId);

    return NextResponse.json({
      success: true,
      message: "Success deleted post",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Post doesnt exist",
      },
      { status: 404 }
    );
  }
}
