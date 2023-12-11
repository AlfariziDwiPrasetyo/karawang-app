import prisma from "@/helper/prismaInit";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request, { params }) {
  try {
    const layanan = await prisma.layanan.findFirstOrThrow({
      where: { slug: params.slug },
    });

    return NextResponse.json({
      success: true,
      data: layanan,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Layanan doesnt exist",
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

    const layanan = await prisma.layanan.update({
      where: {
        slug: params.slug,
      },

      data: {
        categoryId: parseInt(formData.get("category")),
        name: formData.get("name"),
        slug: formData.get("slug"),
        content: formData.get("content"),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Success updated Layanan",
      data: layanan,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Post doesnt exist",
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
    await prisma.layanan.delete({
      where: {
        slug: params.slug,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Success deleted Layanan",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Layanan doesnt exist",
      },
      { status: 404 }
    );
  }
}
