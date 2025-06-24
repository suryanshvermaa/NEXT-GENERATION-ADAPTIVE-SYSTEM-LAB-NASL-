/*
  Warnings:

  - You are about to drop the column `description` on the `Outreach` table. All the data in the column will be lost.
  - You are about to drop the column `outreach` on the `Outreach` table. All the data in the column will be lost.
  - Added the required column `content` to the `Outreach` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Outreach` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Outreach" DROP COLUMN "description",
DROP COLUMN "outreach",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
