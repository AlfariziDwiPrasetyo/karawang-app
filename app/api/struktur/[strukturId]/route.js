import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";
import cloudinary from "@/helper/cloudinary";

import { getToken } from "next-auth/jwt";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request, { params }) {
  try {
    const user = await prisma.struktur.findFirstOrThrow({
      where: { id: parseInt(params.strukturId) },
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
        message: "Struktur doesnt exist",
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

    await cloudinary.uploader.destroy(oldFile);
    const banner = await prisma.struktur.update({
      where: {
        id: parseInt(params.strukturId),
      },

      data: {
        url: uploaded.url,

        publicId: uploaded.public_id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Success updated Struktur",
      data: banner,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Struktur doesnt exist",
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
    const banner = await prisma.struktur.delete({
      where: {
        id: parseInt(params.strukturId),
      },
    });

    await cloudinary.uploader.destroy(banner.publicId);

    return NextResponse.json({
      success: true,
      message: "Success deleted Struktur",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Struktur doesnt exist",
      },
      { status: 404 }
    );
  }
}
