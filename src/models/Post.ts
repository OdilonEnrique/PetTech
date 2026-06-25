export class Post {
  private animalId: number;
  private titulo: string;
  private conteudo: string;
  private fotoUrl?: string;

  constructor(
    animalId: number,
    titulo: string,
    conteudo: string,
    fotoUrl?: string
  ) {
    this.animalId = animalId;
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.fotoUrl = fotoUrl;
  }

  public validar(): void {
    if (!this.animalId) throw new Error("Animal é obrigatório");
    if (!this.titulo.trim()) throw new Error("Título é obrigatório");
    if (!this.conteudo.trim()) throw new Error("Conteúdo é obrigatório");
  }

  public getDados() {
    return {
      animalId: this.animalId,
      titulo: this.titulo,
      conteudo: this.conteudo,
      fotoUrl: this.fotoUrl,
    };
  }
}