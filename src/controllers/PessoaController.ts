import { Request, Response } from "express";
import { PessoaService } from "../services/PessoaService.js";

export class PessoaController {
  private service = new PessoaService();

  async criar(
    req: Request,
    res: Response
  ) {
    try {
      const { nome } = req.body;

      const pessoa = await this.service.criar(
        nome
      );

      return res.status(201).json(pessoa);
    } catch (error) {
      return res.status(400).json({
        erro:
          error instanceof Error
            ? error.message
            : "Erro interno",
      });
    }
  }

  async listar(
    _req: Request,
    res: Response
  ) {
    const pessoas =
      await this.service.listar();

    return res.json(pessoas);
  }
}