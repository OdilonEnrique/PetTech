import { prisma } from "../config/prisma.js";

type CriarPostDTO = {
  animalId: number;
  titulo: string;
  conteudo: string;
  fotoUrl?: string;
};

export class PostRepository {
  async criar(data: CriarPostDTO) {
    return prisma.post.create({
      data,
      include: {
        animal: true,
      },
    });
  }

  async curtir(id: number) {
    return prisma.post.update({
      where: { id },
      data: {
        likes: {
          increment: 1,
        },
      },
    });
  }

  async listar() {
    return prisma.post.findMany({
      include: {
        animal: true,
        comentarios: {
          include: {
            pessoa: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async buscarPorId(id: number) {
    return prisma.post.findUnique({
      where: { id },
    });
  }
}
