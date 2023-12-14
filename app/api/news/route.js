import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";
import { authOptions } from "@/lib/auth";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function POST(request) {
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
    const uploaded = await moveUploadFile(file, "news");

    const post = await prisma.post.create({
      data: {
        title: formData.get("title"),
        authorId: token.id,
        url: uploaded.url,
        publicId: uploaded.public_id,
        content: formData.get("content"),
        published: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Post success created",
      data: post,
    });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json(
      {
        success: false,
        message: "Some error occured",
        msg: err.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  let page = request.nextUrl.searchParams.get("page");
  if (!page) {
    const post = await prisma.post.findMany({
      select: {
        id: true,
        authorId: true,
        title: true,
        content: true,
        url: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: post,
    });
  }
  if (page < 1 || isNaN(page)) {
    return NextResponse.json({
      success: true,
      data: [],
    });
  }

  const post = await prisma.post.findMany({
    take: parseInt(process.env.PAGINATION_POST),
    skip: (parseInt(page) - 1) * parseInt(process.env.PAGINATION_POST),
    select: {
      id: true,
      authorId: true,
      title: true,
      content: true,
      url: true,
    },
  });

  return NextResponse.json({
    success: true,
    data: post,
  });
}
