/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Layanan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Layanan_slug_key` ON `Layanan`(`slug`);
