import { Post } from "../models/Post";
import { AnimalRepository } from "../repositories/animalRepository";
// import { AnimalRepository } from "../repositories/";
import { PostRepository } from "../repositories/PostRepository";

type CriarPostInput = {
  animalId: number;
  titulo: string;
  conteudo: string;
  fotoUrl?: string;
};

export class PostService {
  private repository = new PostRepository();
  private animalRepository = new AnimalRepository();

  async criar(data: CriarPostInput) {
    const animalExiste = await this.animalRepository.buscarPorId(data.animalId);

    if (!animalExiste) {
      throw new Error("Animal não encontrado");
    }

    const post = new Post(
      data.animalId,
      data.titulo,
      data.conteudo,
      data.fotoUrl
    );

    post.validar();

    return this.repository.criar(post.getDados());
  }

  async curtir(id: number) {
    if (!id || Number.isNaN(id)) {
      throw new Error("ID do post inválido");
    }

    const postExiste = await this.repository.buscarPorId(id);

    if (!postExiste) {
      throw new Error("Post não encontrado");
    }

    return this.repository.curtir(id);
  }

  async listar() {
    return this.repository.listar();
  }
}