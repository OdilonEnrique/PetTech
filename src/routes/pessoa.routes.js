/**
 * @swagger
 * tags:
 *   name: Pessoas
 *   description: Gerenciamento de pessoas
 */
import { Router } from "express";
import { PessoaController } from "../controllers/PessoaController.js";
const pessoaRoutes = Router();
const controller = new PessoaController();
/**
 * @swagger
 * /pessoas:
 *   post:
 *     summary: Criar uma pessoa
 *     tags: [Pessoas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Murilo
 *     responses:
 *       201:
 *         description: Pessoa criada com sucesso
 */
pessoaRoutes.post("/", controller.criar.bind(controller));
/**
 * @swagger
 * /pessoas:
 *   get:
 *     summary: Listar pessoas
 *     tags: [Pessoas]
 *     responses:
 *       200:
 *         description: Lista de pessoas
 */
pessoaRoutes.get("/", controller.listar.bind(controller));
export { pessoaRoutes };
