import { writeFile, rm } from "fs/promises";
import { join } from "path";
import v2 from "./cloudinary";

export default async function moveUploadFile(file, folder) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = join("./temp", new Date().getTime() + "-" + file.name);

  await writeFile(path, buffer);
  const uploaded = await v2.uploader.upload(path, { folder: folder });
  // await rm(path);
  return uploaded;
}
