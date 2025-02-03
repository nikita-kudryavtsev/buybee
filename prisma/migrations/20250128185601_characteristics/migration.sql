/*
  Warnings:

  - You are about to drop the column `characteristics` on the `Product` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "ProductCharacteristic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "display" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "ProductCharacteristic_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "display" TEXT,
    "description" TEXT,
    "url" TEXT,
    "price" REAL NOT NULL,
    "productGroupId" INTEGER,
    "categoryId" INTEGER,
    CONSTRAINT "Product_productGroupId_fkey" FOREIGN KEY ("productGroupId") REFERENCES "ProductGroup" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("categoryId", "description", "display", "id", "name", "price", "productGroupId", "url") SELECT "categoryId", "description", "display", "id", "name", "price", "productGroupId", "url" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
