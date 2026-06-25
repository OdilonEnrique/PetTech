# PetTech - Plataforma Educativa para Cuidados com Animais

## Integrantes

* José Murilo Palácio Duarte
* Antonio Heric Bezerra Pacheco
* Odilon Enrique Gomes Duarte
* Paulo Rodolfo Silva Barboza
* Diogo Vieira Antunes

---

# 1. Introdução

O PetTech é uma plataforma educativa desenvolvida com o objetivo de compartilhar informações sobre cuidados com animais domésticos. A aplicação permite que usuários publiquem conteúdos relacionados a animais, promovendo a disseminação de boas práticas de alimentação, higiene, primeiros socorros e cuidados gerais.

O projeto foi desenvolvido como atividade da disciplina de Programação Orientada a Objetos (POO), utilizando conceitos fundamentais da orientação a objetos aliados a tecnologias modernas do ecossistema JavaScript.

---

# 2. Objetivos do Projeto

## Objetivo Geral

Desenvolver uma aplicação web capaz de centralizar informações educativas sobre animais por meio de publicações colaborativas.

## Objetivos Específicos

* Permitir o cadastro de usuários sem necessidade de autenticação complexa.
* Permitir o cadastro de animais e suas características.
* Permitir a criação de publicações relacionadas aos animais cadastrados.
* Permitir comentários em publicações.
* Permitir curtidas em publicações.
* Armazenar imagens dos animais e publicações em nuvem.
* Aplicar conceitos de Programação Orientada a Objetos.
* Aplicar arquitetura em camadas para organização do sistema.

---

# 3. Tecnologias Utilizadas

## Backend

* Node.js
* TypeScript
* Express.js
* Prisma ORM
* PostgreSQL
* Multer
* Cloudinary
* Swagger OpenAPI

## Ferramentas de Desenvolvimento

* Visual Studio Code
* Git
* GitHub
* Insomnia
* Prisma Studio

---

# 4. Arquitetura do Sistema

O projeto foi estruturado utilizando Arquitetura em Camadas (Layered Architecture), promovendo separação de responsabilidades e facilidade de manutenção.

```txt
Cliente
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
Prisma ORM
   ↓
PostgreSQL
```

## Estrutura de Pastas

```txt
src/
│
├── config/
│   ├── prisma.ts
│   ├── cloudinary.ts
│   ├── multer.ts
│   └── postMulter.ts
│
├── controllers/
│   ├── PessoaController.ts
│   ├── AnimalController.ts
│   ├── PostController.ts
│   └── ComentarioController.ts
│
├── models/
│   ├── Pessoa.ts
│   ├── Animal.ts
│   ├── Post.ts
│   └── Comentario.ts
│
├── repositories/
│   ├── PessoaRepository.ts
│   ├── AnimalRepository.ts
│   ├── PostRepository.ts
│   └── ComentarioRepository.ts
│
├── services/
│   ├── PessoaService.ts
│   ├── AnimalService.ts
│   ├── PostService.ts
│   ├── ComentarioService.ts
│   └── UploadService.ts
│
├── routes/
│   ├── pessoa.routes.ts
│   ├── animal.routes.ts
│   ├── post.routes.ts
│   └── comentario.routes.ts
│
├── app.ts
└── server.ts
```

---

# 5. Conceitos de Programação Orientada a Objetos Aplicados

Durante o desenvolvimento foram aplicados diversos conceitos da Programação Orientada a Objetos.

## Classes

Foram criadas classes representando as principais entidades do sistema:

* Pessoa
* Animal
* Post
* Comentario

## Encapsulamento

Os atributos das entidades foram definidos como privados, sendo acessados apenas através de métodos específicos.

Exemplo:

```ts
private nome: string;
```

## Construtores

Utilizados para inicializar os objetos no momento da criação.

```ts
constructor(nome: string) {
  this.nome = nome;
}
```

## Métodos

Cada entidade possui métodos responsáveis por validações e manipulação de dados.

```ts
validar(): void
```

## Abstração

As entidades representam objetos reais do domínio do sistema, abstraindo suas características e comportamentos.

## Separação de Responsabilidades

Cada camada possui uma responsabilidade específica:

| Camada       | Responsabilidade            |
| ------------ | --------------------------- |
| Routes       | Definição das rotas         |
| Controllers  | Recebimento das requisições |
| Services     | Regras de negócio           |
| Repositories | Comunicação com banco       |
| Models       | Representação das entidades |

---

# 6. Banco de Dados

## Pessoa

| Campo     | Tipo     |
| --------- | -------- |
| id        | Integer  |
| nome      | String   |
| createdAt | DateTime |

---

## Animal

| Campo             | Tipo     |
| ----------------- | -------- |
| id                | Integer  |
| fotoUrl           | String   |
| nome              | String   |
| especie           | String   |
| especieOutro      | String   |
| raca              | String   |
| faixaEtaria       | Enum     |
| alimentacao       | String   |
| higiene           | String   |
| primeirosSocorros | String   |
| createdAt         | DateTime |

---

## Post

| Campo     | Tipo     |
| --------- | -------- |
| id        | Integer  |
| animalId  | Integer  |
| titulo    | String   |
| conteudo  | String   |
| fotoUrl   | String   |
| likes     | Integer  |
| createdAt | DateTime |

---

## Comentario

| Campo     | Tipo     |
| --------- | -------- |
| id        | Integer  |
| pessoaId  | Integer  |
| postId    | Integer  |
| texto     | String   |
| createdAt | DateTime |

---

# 7. Relacionamentos

```txt
Pessoa
   │
   └───< Comentario >─── Post
                              │
                              │
                              └─── Animal
```

### Regras

* Uma pessoa pode realizar vários comentários.
* Um comentário pertence a apenas uma pessoa.
* Um comentário pertence a apenas um post.
* Um post pode possuir vários comentários.
* Um animal pode possuir vários posts.
* Um post pertence a apenas um animal.

---

# 8. Funcionalidades Implementadas

## Cadastro de Pessoas

Permite registrar usuários através do nome, possibilitando a identificação dos autores dos comentários.

---

## Cadastro de Animais

Permite registrar informações completas sobre um animal:

* Foto
* Nome
* Espécie
* Raça
* Faixa Etária
* Alimentação
* Higiene
* Primeiros Socorros

---

## Criação de Posts

Permite criar publicações relacionadas aos animais cadastrados.

Cada publicação contém:

* Título
* Conteúdo
* Imagem
* Data de publicação
* Quantidade de curtidas

---

## Sistema de Curtidas

Permite incrementar o número de curtidas de uma publicação através de endpoint específico.

---

## Sistema de Comentários

Permite que usuários publiquem comentários em qualquer postagem.

---

## Upload de Imagens em Nuvem

As imagens são enviadas para o Cloudinary, uma plataforma especializada em armazenamento e gerenciamento de mídia.

Vantagens:

* Não ocupa espaço no servidor.
* Maior disponibilidade.
* URLs públicas para acesso às imagens.
* Facilidade de integração.

---

## Documentação da API

Toda a API foi documentada utilizando Swagger/OpenAPI.

A documentação pode ser acessada através da rota:

```txt
/docs
```

---

# 9. Rotas Disponíveis

## Pessoas

| Método | Endpoint |
| ------ | -------- |
| POST   | /pessoas |
| GET    | /pessoas |

---

## Animais

| Método | Endpoint |
| ------ | -------- |
| POST   | /animais |
| GET    | /animais |

---

## Posts

| Método | Endpoint          |
| ------ | ----------------- |
| POST   | /posts            |
| GET    | /posts            |
| PATCH  | /posts/:id/curtir |

---

## Comentários

| Método | Endpoint                  |
| ------ | ------------------------- |
| POST   | /comentarios              |
| GET    | /comentarios/post/:postId |

---

# 10. Como Executar o Projeto

## Instalar Dependências

```bash
npm install
```

## Configurar Variáveis de Ambiente

```env
DATABASE_URL=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Executar Migrações

```bash
npx prisma migrate dev
```

## Gerar Prisma Client

```bash
npx prisma generate
```

## Iniciar Servidor

```bash
npm run dev
```

---

# 11. Melhorias Futuras

* Sistema de autenticação de usuários.
* Edição de posts.
* Exclusão de comentários.
* Sistema de categorias.
* Pesquisa de animais.
* Sistema de favoritos.
* Dashboard administrativo.
* Upload de múltiplas imagens.

---

# 12. Conclusão

O desenvolvimento do PetTech permitiu a aplicação prática dos conceitos de Programação Orientada a Objetos, banco de dados relacionais, APIs REST e arquitetura em camadas.

A utilização de TypeScript, Prisma ORM, PostgreSQL, Cloudinary e Swagger proporcionou uma solução moderna, organizada e escalável, demonstrando a importância das boas práticas de desenvolvimento de software na construção de aplicações reais.
