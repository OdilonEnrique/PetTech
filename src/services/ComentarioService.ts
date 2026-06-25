import { Comentario } from "../models/comentario";
import { ComentarioRepository } from "../repositories/comentarioRepository";
import { PessoaRepository } from "../repositories/pessoaRepository";
import { PostRepository } from "../repositories/PostRepository";

type CriarComentarioInput = {
  pessoaId: number;
  postId: number;
  texto: string;
};

export class ComentarioService {
  private repository = new ComentarioRepository();
  private pessoaRepository = new PessoaRepository();
  private postRepository = new PostRepository();

  async criar(data: CriarComentarioInput) {
    const pessoaExiste = await this.pessoaRepository.buscarPorId(data.pessoaId);

    if (!pessoaExiste) {
      throw new Error("Pessoa não encontrada");
    }

    const postExiste = await this.postRepository.buscarPorId(data.postId);

    if (!postExiste) {
      throw new Error("Post não encontrado");
    }

    const comentario = new Comentario(
      data.pessoaId,
      data.postId,
      data.texto
    );

    comentario.validar();

    return this.repository.criar(comentario.getDados());
  }

  async listarPorPost(postId: number) {
    return this.repository.listarPorPost(postId);
  }
}