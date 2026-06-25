import { Request, Response } from "express";
import { ComentarioService } from "../services/ComentarioService.js";

export class ComentarioController {
  private service = new ComentarioService();

  async criar(req: Request, res: Response) {
    try {
      const comentario = await this.service.criar({
        pessoaId: Number(req.body.pessoaId),
        postId: Number(req.body.postId),
        texto: req.body.texto,
      });

      return res.status(201).json({
        mensagem: "Comentário criado com sucesso",
        dados: comentario,
      });
    } catch (error) {
      return res.status(400).json({
        erro:
          error instanceof Error
            ? error.message
            : "Erro ao criar comentário",
      });
    }
  }

  async listarPorPost(req: Request, res: Response) {
    const comentarios = await this.service.listarPorPost(
      Number(req.params.postId)
    );

    return res.json(comentarios);
  }
}