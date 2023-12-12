/*
  Warnings:

  - Made the column `content` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `comment` MODIFY `content` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `layanan` MODIFY `content` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `post` MODIFY `content` LONGTEXT NOT NULL;
