/*
  Warnings:

  - Added the required column `menu` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `menu` ADD COLUMN `menu` VARCHAR(255) NOT NULL;
