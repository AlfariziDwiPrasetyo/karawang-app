import streamifier from "streamifier";
import v2 from "./cloudinary";
import { Readable } from "stream";

export default async function moveUploadFile(file, folder) {
  return new Promise(async (res, rej) => {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // const stream = createReadStream(buffer);

    const theTransformStream = v2.uploader.upload_stream(
      {
        folder: folder,
        resource_type: "auto", // atau spesifikkan tipe sumber daya jika diperlukan (image, video, raw, dll.)
      },
      (err, result) => {
        if (err) return rej(err);
        res(result);
      }
    );

    streamifier.createReadStream(buffer).pipe(theTransformStream);
  });
}
