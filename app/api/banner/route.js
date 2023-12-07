import moveUploadFile from "@/helper/moveUploadFile";
import prisma from "@/helper/prismaInit";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get("file");
  const uploaded = await moveUploadFile(file);
  // console.log("form data", formData.get("file"));

  console.log(uploaded);
  return new Response("Hello, Next.js!");
}

export async function GET(request) {
  const user = await prisma.post.findMany();
  console.log(user);
  return new Response("Hellow", {
    status: 200,
  });
}
