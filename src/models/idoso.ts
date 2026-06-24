import { Animal, AnimalDados } from "./animal";

export class Idoso extends Animal {
  constructor(
    especie: string,
    raca: string,
    private alimentacao: string,
    private higiene: string,
    private primeirosSocorros: string,
  ) {
    super(especie, raca);
  }

  exibirDados(): AnimalDados {
    return {
      fase: "IDOSO",
      especie: this.especie,
      raca: this.raca,
      alimentacao: this.alimentacao,
      higiene: this.higiene,
      primeirosSocorros: this.primeirosSocorros,
    };
  }
}
