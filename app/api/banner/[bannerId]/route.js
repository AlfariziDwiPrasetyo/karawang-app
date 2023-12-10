import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";
import cloudinary from "@/helper/cloudinary";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request, { params }) {
  const user = await prisma.banner.findFirst({
    where: { id: parseInt(params.bannerId) },
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
    const uploaded = await moveUploadFile(file, "banner");
    console.log(oldFile);
    await cloudinary.uploader.destroy(oldFile);
    const banner = await prisma.banner.update({
      where: {
        id: parseInt(params.bannerId),
      },

      data: {
        url: uploaded.url,
        originName: uploaded.original_filename,
        publicId: uploaded.public_id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Success updated banner",
      data: banner,
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
