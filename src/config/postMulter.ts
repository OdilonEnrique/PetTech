import multer from "multer";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const uploadPath = path.resolve("uploads", "posts");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadPath);
  },

  filename: (_req, file, cb) => {
    const hash = crypto.randomBytes(10).toString("hex");

    cb(null, `${hash}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

export const postUpload = multer({
  storage,
});