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

    const post = await prisma.penduduk.create({
      data: {
        content: formData.get("content"),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Penduduk success created",
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
  const post = await prisma.penduduk.findMany({
    select: {
      id: true,

      content: true,
    },
  });

  return NextResponse.json({
    success: true,
    data: post,
  });
}
