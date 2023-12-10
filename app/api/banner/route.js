import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";

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
    const file = formData.get("file");
    const uploaded = await moveUploadFile(file, "banner");
    // console.log("form data", formData.get("file"));
    console.log(uploaded);
    const banner = await prisma.banner.create({
      data: {
        url: uploaded.url,
        originName: uploaded.original_filename,
        publicId: uploaded.public_id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Banner success created",
      data: {
        url: banner.url,
        originName: banner.originName,
      },
    });
  } catch (err) {
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
  const user = await prisma.banner.findMany();

  return NextResponse.json({
    success: true,
    data: user,
  });
}
