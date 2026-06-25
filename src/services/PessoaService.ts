import { Pessoa } from "../models/Pessoa.js";
import { PessoaRepository } from "../repositories/PessoaRepository.js";

export class PessoaService {
  private repository = new PessoaRepository();

  async criar(nome: string) {
    const pessoa = new Pessoa(nome);

    if (!pessoa.validar()) {
      throw new Error(
        "O nome deve possuir pelo menos 3 caracteres"
      );
    }

    return this.repository.criar(
      pessoa.getNome()
    );
  }

  async listar() {
    return this.repository.listar();
  }
}