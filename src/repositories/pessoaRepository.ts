import { prisma } from "../config/prisma.js";

export class PessoaRepository {
  async criar(nome: string) {
    return prisma.pessoa.create({
      data: {
        nome,
      },
    });
  }

  async listar() {
    return prisma.pessoa.findMany({
      orderBy: {
        id: "desc",
      },
    });
  }

  async buscarPorId(id: number) {
    return prisma.pessoa.findUnique({
      where: {
        id,
      },
    });
  }
}