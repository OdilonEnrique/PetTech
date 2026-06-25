/**
 * @swagger
 * tags:
 *   name: Animais
 *   description: Gerenciamento de animais
 */
import { Router } from "express";
import { AnimalController } from "../controllers/AnimalController.js";
import { upload } from "../config/multer.js";
const animalRoutes = Router();
const controller = new AnimalController();
/**
 * @swagger
 * /animais:
 *   post:
 *     summary: Criar um animal
 *     tags: [Animais]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - especie
 *               - faixaEtaria
 *               - alimentacao
 *               - higiene
 *               - primeirosSocorros
 *             properties:
 *               foto:
 *                 type: string
 *                 format: binary
 *               nome:
 *                 type: string
 *                 example: Rex
 *               especie:
 *                 type: string
 *                 example: Cachorro
 *               especieOutro:
 *                 type: string
 *               raca:
 *                 type: string
 *                 example: Vira-lata
 *               faixaEtaria:
 *                 type: string
 *                 enum:
 *                   - FILHOTE
 *                   - ADULTO
 *                   - IDOSO
 *               alimentacao:
 *                 type: string
 *               higiene:
 *                 type: string
 *               primeirosSocorros:
 *                 type: string
 *     responses:
 *       201:
 *         description: Animal criado com sucesso
 */
animalRoutes.post("/", upload.single("foto"), controller.criar.bind(controller));
/**
 * @swagger
 * /animais:
 *   get:
 *     summary: Listar animais
 *     tags: [Animais]
 *     responses:
 *       200:
 *         description: Lista de animais
 */
animalRoutes.get("/", controller.listar.bind(controller));
export { animalRoutes };
