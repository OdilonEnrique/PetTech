import { Request, Response } from "express";
import { AnimalService } from "../services/AnimalService.js";
import { UploadService } from "../services/UploadService.js";

export class AnimalController {
  private service = new AnimalService();
  private uploadService = new UploadService();

  async criar(req: Request, res: Response) {
    try {
      const fotoUrl = req.file
        ? await this.uploadService.uploadImage(
            req.file.path,
            "pettech/animals"
          )
        : undefined;

      const animal = await this.service.criar({
        ...req.body,
        fotoUrl,
      });

      return res.status(201).json({
        mensagem: "Animal cadastrado com sucesso",
        dados: animal,
      });
    } catch (error) {
      return res.status(400).json({
        erro:
          error instanceof Error ? error.message : "Erro ao cadastrar animal",
      });
    }
  }

  async listar(_req: Request, res: Response) {
    const animais = await this.service.listar();

    return res.json(animais);
  }
}