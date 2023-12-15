import v2 from "./cloudinary";

export default async function moveUploadFile(file, folder) {
  const mime = file.type;
  const encoding = "base64";
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes).toString("base64");
  const fileUri = "data:" + mime + ";" + encoding + "," + buffer;

  const upload = await v2.uploader.upload(fileUri, {
    invalidate: true,
    folder: folder,
    resource_type: "auto",
  });

  return upload;
}
