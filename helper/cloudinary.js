import { v2 } from "cloudinary";
v2.config({
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  secure: true,
});

export default v2;
