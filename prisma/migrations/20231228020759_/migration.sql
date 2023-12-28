/*
  Warnings:

  - You are about to alter the column `createdAt` on the `Employees` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.
  - You are about to alter the column `createdAt` on the `Lines` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `createdAt` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Employees` MODIFY `createdAt` DATETIME NOT NULL DEFAULT NOW();

-- AlterTable
ALTER TABLE `Lines` MODIFY `createdAt` DATETIME NOT NULL DEFAULT NOW(),
    MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `createdAt` DATETIME NOT NULL DEFAULT NOW();
