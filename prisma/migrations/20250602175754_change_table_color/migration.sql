/*
  Warnings:

  - You are about to drop the column `lable` on the `Color` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[label]` on the table `Color` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `label` to the `Color` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Color_lable_key";

-- AlterTable
ALTER TABLE "Color" DROP COLUMN "lable",
ADD COLUMN     "label" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Color_label_key" ON "Color"("label");
