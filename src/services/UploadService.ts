import fs from "fs";
import { cloudinary } from "../config/cloudinary.js";

export class UploadService {
  async uploadImage(filePath: string, folder: string) {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: "image",
    });

    fs.unlinkSync(filePath);

    return result.secure_url;
  }
}