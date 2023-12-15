import prisma from "@/helper/prismaInit";
import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
export async function POST(request) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        username: "admin",
      },
      select: {
        email: true,
        secret_key: true,
      },
    });
    const transporter = createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: user.email,
        pass: user.secret_key,
      },
      secure: true,
    });
    const formData = await request.formData();

    const mailData = {
      from: user.email,
      to: user.email,
      subject: `Message From ${formData.get("name")} - ${formData.get(
        "email"
      )}`,
      text: formData.get("message"),
      html: `<div>${formData.get("message")}</div>`,
    };
    const send = await transporter.sendMail(mailData);

    return NextResponse.json({
      success: true,
      message: "Message sended",
    });
  } catch (err) {
    console.log(err.message);
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
