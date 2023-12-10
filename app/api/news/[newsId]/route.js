import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";
import cloudinary from "@/helper/cloudinary";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request, { params }) {
  const user = await prisma.post.findFirst({
    where: { id: parseInt(params.newsId) },
  });

  return NextResponse.json({
    success: true,
    data: user,
  });
}

export async function PUT(request, { params }) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const oldFile = formData.get("oldFile");
    console.log("INIIi : ", oldFile);
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
