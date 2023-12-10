/*
  Warnings:

  - Added the required column `publicId` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `banner` ADD COLUMN `publicId` VARCHAR(191) NOT NULL;
