import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request, { params }) {
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
  console.log(params.slug);
  try {
    await prisma.layananCategory.delete({
      where: {
        slug: params.slug,
      },
    });
    console.log("Behrasl");
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
