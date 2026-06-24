import { prisma } from "../database/prisma";

interface CriarComentarioDTO {
  text: string;
  pessoaId: number;
  animalId?: number;
}

export async function criarComentario(dados: CriarComentarioDTO) {
  return prisma.comentario.create({
    data: {
      text: dados.text,
      pessoaId: dados.pessoaId,
      animalId: dados.animalId,
    },
    include: {
      pessoa: true,
      animal: true,
    },
  });
}

export async function listarComentarios() {
  return prisma.comentario.findMany({
    include: {
      pessoa: true,
      animal: true,
    },
  });
}
