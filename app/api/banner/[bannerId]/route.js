import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";
import cloudinary from "@/helper/cloudinary";

import { getToken } from "next-auth/jwt";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request, { params }) {
  try {
    const user = await prisma.banner.findFirstOrThrow({
      where: { id: parseInt(params.bannerId) },
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
        message: "Banner doesnt exist",
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

  if (!session) {
    return NextResponse.json(
      {
        status: "fail",
        message: "You are not logged in",
      },
      { status: 401 }
    );
  }
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
