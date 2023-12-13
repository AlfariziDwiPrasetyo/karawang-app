import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";
import { compare } from "bcrypt";

export const dynamic = "force-dynamic"; // defaults to force-static

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

    const pw = await prisma.user.findUniqueOrThrow({
      where: {
        username: token.name,
      },
    });

    if (!pw || !(await compare(formData.get("password"), pw.password))) {
      return NextResponse.json(
        {
          success: false,
          message: "Password Incorrect",
        },
        { status: 401 }
      );
    }

    const user = await prisma.user.update({
      where: {
        id: parseInt(params.userId),
      },

      data: {
        email: formData.get("email"),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Success updated Email user",
      data: user,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "User doesnt exist",
      },
      { status: 404 }
    );
  }
}
