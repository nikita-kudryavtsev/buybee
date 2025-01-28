/*
  Warnings:

  - Added the required column `priority` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Role" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "display" TEXT NOT NULL,
    "description" TEXT,
    "priority" INTEGER NOT NULL
);
INSERT INTO "new_Role" ("description", "display", "id", "name") SELECT "description", "display", "id", "name" FROM "Role";
DROP TABLE "Role";
ALTER TABLE "new_Role" RENAME TO "Role";
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
