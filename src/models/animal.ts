export interface AnimalDados {
  especie: string;
  raca: string;
  fase: "FILHOTE" | "ADULTO" | "IDOSO";
  alimentacao: string;
  higiene: string;
  primeirosSocorros: string;
}

export abstract class Animal {
  protected especie: string;
  protected raca: string;

  constructor(especie: string, raca: string) {
    this.especie = especie;
    this.raca = raca;
  }

  abstract exibirDados(): AnimalDados;
}
