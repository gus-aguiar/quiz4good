/*
  Warnings:

  - You are about to drop the `Resposta` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `resposta` to the `Pergunta` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Resposta";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pergunta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texto" TEXT NOT NULL,
    "resposta" TEXT NOT NULL
);
INSERT INTO "new_Pergunta" ("id", "texto") SELECT "id", "texto" FROM "Pergunta";
DROP TABLE "Pergunta";
ALTER TABLE "new_Pergunta" RENAME TO "Pergunta";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
