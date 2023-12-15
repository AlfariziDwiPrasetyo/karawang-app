import { writeFile, rm, mkdir } from "fs/promises";
import { createReadStream } from "fs";
import { dirname, join } from "path";
import v2 from "./cloudinary";

export default async function moveUploadFile(file, folder) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const stream = createReadStream(buffer);

  const uploaded = await v2.uploader.upload(stream, {
    folder: folder,
    resource_type: "auto", // atau spesifikkan tipe sumber daya jika diperlukan (image, video, raw, dll.)
  });
  return uploaded;
}
