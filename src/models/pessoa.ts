export class Pessoa {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  public getNome(): string {
    return this.nome;
  }

  public alterarNome(nome: string): void {
    this.nome = nome;
  }

  public validar(): boolean {
    return this.nome.trim().length >= 3;
  }
}