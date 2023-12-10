import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to force-static

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
