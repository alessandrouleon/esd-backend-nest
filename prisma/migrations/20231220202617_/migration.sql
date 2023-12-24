/*
  Warnings:

  - A unique constraint covering the columns `[stage]` on the table `Lines` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Lines` ADD COLUMN `stage` VARCHAR(24) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Lines_stage_key` ON `Lines`(`stage`);
