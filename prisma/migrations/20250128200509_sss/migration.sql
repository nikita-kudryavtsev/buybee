/*
  Warnings:

  - You are about to drop the `ProductCharacteristic` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN "characterisics" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProductCharacteristic";
PRAGMA foreign_keys=on;
