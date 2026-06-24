import express, { Request, Response } from "express";
import "dotenv/config";

import { criarAnimal, listarAnimais } from "./repositories/animalRepository";
import { criarPessoa, listarPessoas } from "./repositories/pessoaRepository";
import {
  criarComentario,
  listarComentarios,
} from "./repositories/comentarioRepository";
import { Pessoa } from "./models/pessoa";
import { Filhote } from "./models/filhote";
import { Adulto } from "./models/adulto";
import { Idoso } from "./models/idoso";

const app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  return res.json({
    mensagem: "API POO com TypeScript, Prisma 7 e Neon funcionando!",
  });
});

app.post("/pessoas", async (req: Request, res: Response) => {
  try {
    const { email, cpf, nome } = req.body;

    const pessoa = new Pessoa(email, cpf, nome);
    const pessoaSalva = await criarPessoa(pessoa);

    return res.status(201).json({
      mensagem: "Pessoa cadastrada com sucesso",
      dados: pessoaSalva,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao cadastrar pessoa",
    });
  }
});

app.get("/pessoas", async (_req: Request, res: Response) => {
  const pessoas = await listarPessoas();
  return res.json(pessoas);
});

app.post("/animais/:fase", async (req: Request, res: Response) => {
  try {
    const { fase } = req.params;
    const { especie, raca, alimentacao, higiene, primeirosSocorros } = req.body;

    let animal;

    if (fase === "filhote") {
      animal = new Filhote(
        especie,
        raca,
        alimentacao,
        higiene,
        primeirosSocorros,
      );
    } else if (fase === "adulto") {
      animal = new Adulto(
        especie,
        raca,
        alimentacao,
        higiene,
        primeirosSocorros,
      );
    } else if (fase === "idoso") {
      animal = new Idoso(
        especie,
        raca,
        alimentacao,
        higiene,
        primeirosSocorros,
      );
    } else {
      return res.status(400).json({
        erro: "Fase inválida. Use: filhote, adulto ou idoso",
      });
    }

    const animalSalvo = await criarAnimal(animal.exibirDados());

    return res.status(201).json({
      mensagem: "Animal cadastrado com sucesso",
      dados: animalSalvo,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao cadastrar animal",
    });
  }
});

app.get("/animais", async (_req: Request, res: Response) => {
  const animais = await listarAnimais();
  return res.json(animais);
});

app.post("/comentarios", async (req: Request, res: Response) => {
  try {
    const { text, pessoaId, animalId } = req.body;

    const comentarioSalvo = await criarComentario({
      text,
      pessoaId,
      animalId,
    });

    return res.status(201).json({
      mensagem: "Comentário cadastrado com sucesso",
      dados: comentarioSalvo,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro ao cadastrar comentário",
    });
  }
});

app.get("/comentarios", async (_req: Request, res: Response) => {
  const comentarios = await listarComentarios();
  return res.json(comentarios);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
