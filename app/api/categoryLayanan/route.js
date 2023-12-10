import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";
import { v4 } from "uuid";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function POST(request) {
  try {
    const formData = await request.formData();
    let slug = formData.get("slug");
    // console.log("form data", formData.get("file"));
    const getCategoryLayanan = await prisma.layananCategory.findUnique({
      where: {
        slug: slug,
      },
    });
    if (getCategoryLayanan) {
      slug += "-" + v4();
    }
    const categoryLayanan = await prisma.layananCategory.create({
      data: {
        name: formData.get("name"),
        slug: slug,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Category Layanan success created",
      data: categoryLayanan,
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
  const categoryLayanan = await prisma.layananCategory.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      Layanan: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
  });

  return NextResponse.json({
    success: true,
    data: categoryLayanan,
  });
}
