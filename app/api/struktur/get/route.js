import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request) {
  try {
    const user = await prisma.struktur.findFirstOrThrow();
    console.log(user);
    return NextResponse.json({
      success: true,
      data: user,
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
