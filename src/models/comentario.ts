export class Comentario {
  private pessoaId: number;
  private postId: number;
  private texto: string;

  constructor(pessoaId: number, postId: number, texto: string) {
    this.pessoaId = pessoaId;
    this.postId = postId;
    this.texto = texto;
  }

  public validar(): void {
    if (!this.pessoaId) throw new Error("Pessoa é obrigatória");
    if (!this.postId) throw new Error("Post é obrigatório");
    if (!this.texto.trim()) throw new Error("Comentário é obrigatório");
  }

  public getDados() {
    return {
      pessoaId: this.pessoaId,
      postId: this.postId,
      texto: this.texto,
    };
  }
}