import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";
import cloudinary from "@/helper/cloudinary";

export const dynamic = "force-dynamic"; // defaults to force-static

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
