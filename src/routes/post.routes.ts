/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Gerenciamento de posts do blog
 */

import { Router } from "express";
import { PostController } from "../controllers/PostController.js";
import { postUpload } from "../config/postMulter.js";

const postRoutes = Router();

const controller = new PostController();

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Criar um post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - animalId
 *               - titulo
 *               - conteudo
 *             properties:
 *               foto:
 *                 type: string
 *                 format: binary
 *               animalId:
 *                 type: integer
 *                 example: 1
 *               titulo:
 *                 type: string
 *                 example: Como cuidar de um cachorro
 *               conteudo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 */
postRoutes.post(
  "/",
  postUpload.single("foto"),
  controller.criar.bind(controller)
);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Listar posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de posts
 */
postRoutes.get("/", controller.listar.bind(controller));

/**
 * @swagger
 * /posts/{id}/curtir:
 *   patch:
 *     summary: Curtir um post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post curtido com sucesso
 */
postRoutes.patch(
  "/:id/curtir",
  controller.curtir.bind(controller)
);

export { postRoutes };