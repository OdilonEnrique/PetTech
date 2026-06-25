import { prisma } from "../config/prisma.js";
import { FaixaEtaria } from "@prisma/client";

type CriarAnimalDTO = {
  nome: string;
  especie: string;
  especieOutro?: string;
  raca?: string;
  faixaEtaria: FaixaEtaria;
  alimentacao: string;
  higiene: string;
  primeirosSocorros: string;
  fotoUrl?: string;
};

export class AnimalRepository {
  async criar(data: CriarAnimalDTO) {
    return prisma.animal.create({
      data,
    });
  }

  async listar() {
    return prisma.animal.findMany({
      orderBy: {
        id: "desc",
      },
    });
  }

  async buscarPorId(id: number) {
    return prisma.animal.findUnique({
      where: {
        id,
      },
    });
  }
}