export class Pessoa {
  constructor(
    public email: string,
    public cpf: string,
    public nome: string,
  ) {}

  exibirDados() {
    return {
      email: this.email,
      cpf: this.cpf,
      nome: this.nome,
    };
  }
}
