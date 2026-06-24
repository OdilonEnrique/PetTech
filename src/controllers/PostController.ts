import { Request, Response } from "express";
import { PostService } from "../services/PostService.js";
import { UploadService } from "../services/UploadService.js";

export class PostController {
  private service = new PostService();
  private uploadService = new UploadService();

  async criar(req: Request, res: Response) {
    try {
      const fotoUrl = req.file
        ? await this.uploadService.uploadImage(req.file.path, "pettech/posts")
        : undefined;

      const post = await this.service.criar({
        ...req.body,
        animalId: Number(req.body.animalId),
        fotoUrl,
      });

      return res.status(201).json({
        mensagem: "Post criado com sucesso",
        dados: post,
      });
    } catch (error) {
      return res.status(400).json({
        erro: error instanceof Error ? error.message : "Erro ao criar post",
      });
    }
  }

  async curtir(req: Request, res: Response) {
    try {
      const post = await this.service.curtir(Number(req.params.id));

      return res.json({
        mensagem: "Post curtido com sucesso",
        dados: post,
      });
    } catch (error) {
      return res.status(400).json({
        erro: error instanceof Error ? error.message : "Erro ao curtir post",
      });
    }
  }

  async listar(_req: Request, res: Response) {
    const posts = await this.service.listar();
    return res.json(posts);
  }
}