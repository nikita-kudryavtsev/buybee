-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" REAL NOT NULL,
    "productGroupId" INTEGER,
    "categoryId" INTEGER,
    CONSTRAINT "Product_productGroupId_fkey" FOREIGN KEY ("productGroupId") REFERENCES "ProductGroup" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("categoryId", "description", "id", "name", "price", "productGroupId") SELECT "categoryId", "description", "id", "name", "price", "productGroupId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_ProductGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "categoryId" INTEGER,
    CONSTRAINT "ProductGroup_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ProductGroup" ("categoryId", "description", "id", "name") SELECT "categoryId", "description", "id", "name" FROM "ProductGroup";
DROP TABLE "ProductGroup";
ALTER TABLE "new_ProductGroup" RENAME TO "ProductGroup";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
