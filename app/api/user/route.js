import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";

export async function GET(request) {
  const user = await prisma.user.findFirst({
    where: {
      username: "admin",
    },
    select: {
      email: true,
    },
  });

  return NextResponse.json({
    success: true,
    data: user,
  });
}
