import express from "express";
import { pessoaRoutes } from "./routes/pessoa.routes";
import { animalRoutes } from "./routes/animal.routes";
import path from "path";
import { postRoutes } from "./routes/post.routes";
import { comentarioRoutes } from "./routes/comentario.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  return res.json({
    mensagem: "API Blog Animal com POO funcionando!",
  });
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/pessoas", pessoaRoutes);
app.use("/animais", animalRoutes);
app.use("/uploads", express.static(path.resolve(process.cwd(), "uploads")));
app.use("/posts", postRoutes);
app.use("/comentarios", comentarioRoutes);

export { app };
