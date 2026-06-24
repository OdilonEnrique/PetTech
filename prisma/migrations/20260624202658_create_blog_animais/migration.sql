/*
  Warnings:

  - You are about to drop the column `fase` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `animalId` on the `Comentario` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Comentario` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `Pessoa` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Pessoa` table. All the data in the column will be lost.
  - Added the required column `faixaEtaria` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `Comentario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `texto` to the `Comentario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FaixaEtaria" AS ENUM ('FILHOTE', 'ADULTO', 'IDOSO');

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_animalId_fkey";

-- DropIndex
DROP INDEX "Pessoa_cpf_key";

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "fase",
ADD COLUMN     "faixaEtaria" "FaixaEtaria" NOT NULL,
ADD COLUMN     "fotoUrl" TEXT,
ADD COLUMN     "nome" TEXT NOT NULL,
ALTER COLUMN "raca" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Comentario" DROP COLUMN "animalId",
DROP COLUMN "text",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "postId" INTEGER NOT NULL,
ADD COLUMN     "texto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "cpf",
DROP COLUMN "email";

-- DropEnum
DROP TYPE "FaseAnimal";

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "animalId" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "fotoUrl" TEXT,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
