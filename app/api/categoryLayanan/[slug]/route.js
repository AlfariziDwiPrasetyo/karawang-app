import prisma from "@/helper/prismaInit";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request, { params }) {
  console.log("+===== : ", params.slug);
  try {
    const layananCategory = await prisma.layananCategory.findFirstOrThrow({
      where: { slug: params.slug },
    });

    return NextResponse.json({
      success: true,
      data: layananCategory,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Layanan category doesnt exist",
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

    const layananCategory = await prisma.layananCategory.update({
      where: {
        slug: params.slug,
      },

      data: {
        name: formData.get("name"),
        slug: formData.get("slug"),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Success updated Category Layanan",
      data: layananCategory,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Category Layanan doesnt exist",
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
    await prisma.layananCategory.delete({
      where: {
        slug: params.slug,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Success deleted Category Layanan",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Category Layanan doesnt exist",
      },
      { status: 404 }
    );
  }
}
