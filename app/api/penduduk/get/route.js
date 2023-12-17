import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request) {
  try {
    const post = await prisma.penduduk.findFirstOrThrow({
      select: {
        id: true,

        content: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: post,
    });
  } catch (err) {
    console.log(err);
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
