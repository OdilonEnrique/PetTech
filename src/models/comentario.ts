import { Pessoa } from "./pessoa";

export class Comentario {
  constructor(
    public text: string,
    public pessoa: Pessoa,
  ) {}

  exibirDados() {
    return {
      text: this.text,
      pessoa: this.pessoa.exibirDados(),
    };
  }
}
