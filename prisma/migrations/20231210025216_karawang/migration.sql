-- DropForeignKey
ALTER TABLE `layanan` DROP FOREIGN KEY `Layanan_categoryId_fkey`;

-- AddForeignKey
ALTER TABLE `Layanan` ADD CONSTRAINT `Layanan_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `LayananCategory`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
