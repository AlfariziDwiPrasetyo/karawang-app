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
    const penduduk = await prisma.penduduk.findFirstOrThrow({});

    return NextResponse.json({
      success: true,
      data: penduduk,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Penduduk doesnt exist",
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

    const post = await prisma.penduduk.update({
      where: {
        id: parseInt(params.pendudukId),
      },

      data: {
        content: formData.get("content"),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Success updated Penduduk",
      data: post,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Penduduk doesnt exist",
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
    const post = await prisma.penduduk.delete({
      where: {
        id: parseInt(params.pendudukId),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Success deleted Penduduk",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Penduduk doesnt exist",
      },
      { status: 404 }
    );
  }
}
