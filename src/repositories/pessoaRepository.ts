import { prisma } from "../database/prisma";
import { Pessoa } from "../models/pessoa";

export async function criarPessoa(pessoa: Pessoa) {
  return prisma.pessoa.create({
    data: {
      email: pessoa.email,
      cpf: pessoa.cpf,
      nome: pessoa.nome,
    },
  });
}

export async function listarPessoas() {
  return prisma.pessoa.findMany({
    include: {
      comentarios: true,
    },
  });
}
