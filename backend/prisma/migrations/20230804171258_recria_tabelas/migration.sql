/*
  Warnings:

  - You are about to drop the `_PerguntaToUsuario` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "_PerguntaToUsuario_B_index";

-- DropIndex
DROP INDEX "_PerguntaToUsuario_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_PerguntaToUsuario";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UsuarioPergunta" (
    "usuarioId" TEXT NOT NULL,
    "perguntaId" INTEGER NOT NULL,

    PRIMARY KEY ("perguntaId", "usuarioId"),
    CONSTRAINT "UsuarioPergunta_perguntaId_fkey" FOREIGN KEY ("perguntaId") REFERENCES "Pergunta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UsuarioPergunta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pergunta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texto" TEXT NOT NULL,
    "resposta" TEXT NOT NULL,
    "stack" TEXT NOT NULL DEFAULT 'react'
);
INSERT INTO "new_Pergunta" ("id", "resposta", "texto") SELECT "id", "resposta", "texto" FROM "Pergunta";
DROP TABLE "Pergunta";
ALTER TABLE "new_Pergunta" RENAME TO "Pergunta";
CREATE TABLE "new_Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("email", "id", "nome") SELECT "email", "id", "nome" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
