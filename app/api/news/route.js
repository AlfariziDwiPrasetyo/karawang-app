import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const uploaded = await moveUploadFile(file, "news");
    // console.log("form data", formData.get("file"));
    console.log(uploaded);
    const post = await prisma.post.create({
      data: {
        title: formData.get("title"),
        authorId: 1,
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
    return NextResponse.json(
      {
        success: false,
        message: "Some error occured",
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
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
