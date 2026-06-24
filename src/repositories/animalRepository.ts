import { prisma } from "../database/prisma";
import { FaseAnimal } from "../generated/prisma/client";
import { AnimalDados } from "../models/animal";

export async function criarAnimal(animal: AnimalDados) {
  return prisma.animal.create({
    data: {
      especie: animal.especie,
      raca: animal.raca,
      fase: animal.fase as FaseAnimal,
      alimentacao: animal.alimentacao,
      higiene: animal.higiene,
      primeirosSocorros: animal.primeirosSocorros,
    },
  });
}

export async function listarAnimais() {
  return prisma.animal.findMany({
    include: {
      comentarios: true,
    },
  });
}
