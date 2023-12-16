import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { v4 } from "uuid";

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
    let slug = formData.get("slug").replace("/", "-");

    const getLayanan = await prisma.layanan.findUnique({
      where: {
        slug: slug,
      },
    });
    if (getLayanan) {
      slug += "-" + v4();
    }

    const layanan = await prisma.layanan.create({
      data: {
        name: formData.get("name"),
        categoryId: parseInt(formData.get("category")),
        slug: slug,
        content: formData.get("content"),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Layanan success created",
      data: layanan,
    });
  } catch (err) {
    console.log(err);
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
  const layanan = await prisma.layanan.findMany({
    select: {
      id: true,
      content: true,
      categoryId: true,
      name: true,
      slug: true,
      LayananCategory: {
        select: {
          name: true,
        },
      },
    },
  });

  return NextResponse.json({
    success: true,
    data: layanan,
  });
}
