/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `LayananCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `LayananCategory_slug_key` ON `LayananCategory`(`slug`);
