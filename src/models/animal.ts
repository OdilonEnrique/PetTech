export type FaixaEtaria = "FILHOTE" | "ADULTO" | "IDOSO";

export class Animal {
  private nome: string;
  private especie: string;
  private especieOutro?: string;
  private raca?: string;
  private faixaEtaria: FaixaEtaria;
  private alimentacao: string;
  private higiene: string;
  private primeirosSocorros: string;
  private fotoUrl?: string;

  constructor(
    nome: string,
    especie: string,
    faixaEtaria: FaixaEtaria,
    alimentacao: string,
    higiene: string,
    primeirosSocorros: string,
    raca?: string,
    especieOutro?: string,
    fotoUrl?: string
  ) {
    this.nome = nome;
    this.especie = especie;
    this.faixaEtaria = faixaEtaria;
    this.alimentacao = alimentacao;
    this.higiene = higiene;
    this.primeirosSocorros = primeirosSocorros;
    this.raca = raca;
    this.especieOutro = especieOutro;
    this.fotoUrl = fotoUrl;
  }

  public validar(): void {
    if (!this.nome.trim()) throw new Error("Nome do animal é obrigatório");
    if (!this.especie.trim()) throw new Error("Espécie é obrigatória");
    if (!this.alimentacao.trim()) throw new Error("Alimentação é obrigatória");
    if (!this.higiene.trim()) throw new Error("Higiene é obrigatória");
    if (!this.primeirosSocorros.trim()) {
      throw new Error("Primeiros socorros é obrigatório");
    }

    if (this.especie === "OUTRO" && !this.especieOutro?.trim()) {
      throw new Error("Informe a espécie quando selecionar OUTRO");
    }
  }

  public getDados() {
    return {
      nome: this.nome,
      especie: this.especie,
      especieOutro: this.especieOutro,
      raca: this.raca,
      faixaEtaria: this.faixaEtaria,
      alimentacao: this.alimentacao,
      higiene: this.higiene,
      primeirosSocorros: this.primeirosSocorros,
      fotoUrl: this.fotoUrl,
    };
  }
}