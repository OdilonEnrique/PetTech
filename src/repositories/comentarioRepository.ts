import { prisma } from "../config/prisma.js";

type CriarComentarioDTO = {
  pessoaId: number;
  postId: number;
  texto: string;
};

export class ComentarioRepository {
  async criar(data: CriarComentarioDTO) {
    return prisma.comentario.create({
      data,
      include: {
        pessoa: true,
        post: true,
      },
    });
  }

  async listarPorPost(postId: number) {
    return prisma.comentario.findMany({
      where: { postId },
      include: {
        pessoa: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}