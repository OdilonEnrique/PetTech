/**
 * @swagger
 * tags:
 *   name: Comentários
 *   description: Gerenciamento de comentários
 */
import { Router } from "express";
import { ComentarioController } from "../controllers/ComentarioController.js";
const comentarioRoutes = Router();
const controller = new ComentarioController();
/**
 * @swagger
 * /comentarios:
 *   post:
 *     summary: Criar comentário
 *     tags: [Comentários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - pessoaId
 *               - postId
 *               - texto
 *             properties:
 *               pessoaId:
 *                 type: integer
 *                 example: 1
 *               postId:
 *                 type: integer
 *                 example: 1
 *               texto:
 *                 type: string
 *                 example: Excelente conteúdo!
 *     responses:
 *       201:
 *         description: Comentário criado com sucesso
 */
comentarioRoutes.post("/", controller.criar.bind(controller));
/**
 * @swagger
 * /comentarios/post/{postId}:
 *   get:
 *     summary: Listar comentários de um post
 *     tags: [Comentários]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de comentários
 */
comentarioRoutes.get("/post/:postId", controller.listarPorPost.bind(controller));
export { comentarioRoutes };
