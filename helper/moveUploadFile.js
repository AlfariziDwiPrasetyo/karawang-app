import { writeFile, rm } from "fs/promises";
import { join } from "path";
import { v2 } from "cloudinary";
v2.config({
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  secure: true,
});

export default async function moveUploadFile(file) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = join("./temp", new Date().getTime() + "-" + file.name);

  await writeFile(path, buffer);
  const uploaded = await v2.uploader.upload(path);
  await rm(path);
  return uploaded;
}
