import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";
import cloudinary from "@/helper/cloudinary";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function DELETE(request, { params }) {
  try {
    const banner = await prisma.banner.delete({
      where: {
        id: parseInt(params.bannerId),
      },
    });

    await cloudinary.uploader.destroy(banner.publicId);

    return NextResponse.json({
      success: true,
      message: "Success deleted banner",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Banner doesnt exist",
      },
      { status: 404 }
    );
  }
}
