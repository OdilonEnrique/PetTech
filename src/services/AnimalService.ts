import { Animal, FaixaEtaria } from "../models/Animal.js";
import { AnimalRepository } from "../repositories/AnimalRepository.js";

type CriarAnimalInput = {
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

export class AnimalService {
  private repository = new AnimalRepository();

  async criar(data: CriarAnimalInput) {
    const animal = new Animal(
      data.nome,
      data.especie,
      data.faixaEtaria,
      data.alimentacao,
      data.higiene,
      data.primeirosSocorros,
      data.raca,
      data.especieOutro,
      data.fotoUrl
    );

    animal.validar();

    return this.repository.criar(animal.getDados());
  }

  async listar() {
    return this.repository.listar();
  }
}