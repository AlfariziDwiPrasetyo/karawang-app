import { writeFile, rm } from "fs/promises";
import { dirname, join } from "path";
import v2 from "./cloudinary";

const bytes = await file.arrayBuffer();
const buffer = Buffer.from(bytes);

const path = join("./temp", new Date().getTime() + "-" + file.name);
const directory = dirname(path);

// Membuat direktori jika belum ada
await mkdir(directory, { recursive: true });

await writeFile(path, buffer);
const uploaded = await v2.uploader.upload(path, { folder: folder });
// await rm(path);
return uploaded;
