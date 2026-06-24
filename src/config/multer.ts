import multer from "multer";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const uploadPath = path.resolve("uploads", "temp", "animals");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadPath);
  },

  filename: (_req, file, cb) => {
    const hash = crypto.randomBytes(10).toString("hex");
    const extension = path.extname(file.originalname);

    cb(null, `${hash}-${Date.now()}${extension}`);
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Envie apenas arquivos de imagem"));
    }

    cb(null, true);
  },
});