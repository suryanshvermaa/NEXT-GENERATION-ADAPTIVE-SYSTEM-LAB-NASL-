/*
  Warnings:

  - You are about to drop the column `updateAt` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Outreach` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `PhotoGallery` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `ResearchArea` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `ResearchFacility` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `GroupMoment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `People` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Publication` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Outreach" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "PhotoGallery" DROP COLUMN "updateAt",
ADD COLUMN     "groupMoment" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ResearchArea" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ResearchFacility" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "updateAt",
ADD COLUMN     "about" TEXT,
ADD COLUMN     "contactNumber" TEXT,
ADD COLUMN     "designation" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "social" JSONB[],
ADD COLUMN     "status" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- DropTable
DROP TABLE "GroupMoment";

-- DropTable
DROP TABLE "People";

-- DropTable
DROP TABLE "Publication";

-- CreateTable
CREATE TABLE "Journal_Paper" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "journal" TEXT NOT NULL,
    "volume" TEXT,
    "year" INTEGER NOT NULL,
    "publicationDate" TIMESTAMP(3),
    "quartile" TEXT,
    "doi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Journal_Paper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conference_Paper" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "conference" TEXT NOT NULL,
    "location" TEXT,
    "year" INTEGER NOT NULL,
    "pages" TEXT,
    "indexing" TEXT,
    "doi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Conference_Paper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book_Chapter" (
    "id" SERIAL NOT NULL,
    "chapterTitle" TEXT NOT NULL,
    "bookTitle" TEXT NOT NULL,
    "scopus" TEXT,
    "doi" TEXT,
    "publisher" TEXT,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Book_Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "publisher" TEXT,
    "scopus" TEXT,
    "doi" TEXT,
    "isbn" TEXT,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "agency" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "outlay" DOUBLE PRECISION NOT NULL,
    "duration" TEXT NOT NULL,
    "piInstitute" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "fundsReceived" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patent" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "grantNo" TEXT NOT NULL,
    "grantDate" TIMESTAMP(3),
    "publicationDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Patent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Highlight" (
    "id" SERIAL NOT NULL,
    "highlight" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT,
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Highlight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecentUpdate" (
    "id" SERIAL NOT NULL,
    "update" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT,
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecentUpdate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Journal_PaperToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Journal_PaperToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_Conference_PaperToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Conference_PaperToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_Book_ChapterToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Book_ChapterToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_BookToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_BookToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PatentToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PatentToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Journal_Paper_id_key" ON "Journal_Paper"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Conference_Paper_id_key" ON "Conference_Paper"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Book_Chapter_id_key" ON "Book_Chapter"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Book_id_key" ON "Book"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Patent_id_key" ON "Patent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Highlight_id_key" ON "Highlight"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RecentUpdate_id_key" ON "RecentUpdate"("id");

-- CreateIndex
CREATE INDEX "_Journal_PaperToUser_B_index" ON "_Journal_PaperToUser"("B");

-- CreateIndex
CREATE INDEX "_Conference_PaperToUser_B_index" ON "_Conference_PaperToUser"("B");

-- CreateIndex
CREATE INDEX "_Book_ChapterToUser_B_index" ON "_Book_ChapterToUser"("B");

-- CreateIndex
CREATE INDEX "_BookToUser_B_index" ON "_BookToUser"("B");

-- CreateIndex
CREATE INDEX "_PatentToUser_B_index" ON "_PatentToUser"("B");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_piInstitute_fkey" FOREIGN KEY ("piInstitute") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Journal_PaperToUser" ADD CONSTRAINT "_Journal_PaperToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Journal_Paper"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Journal_PaperToUser" ADD CONSTRAINT "_Journal_PaperToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Conference_PaperToUser" ADD CONSTRAINT "_Conference_PaperToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Conference_Paper"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Conference_PaperToUser" ADD CONSTRAINT "_Conference_PaperToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Book_ChapterToUser" ADD CONSTRAINT "_Book_ChapterToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Book_Chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Book_ChapterToUser" ADD CONSTRAINT "_Book_ChapterToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToUser" ADD CONSTRAINT "_BookToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToUser" ADD CONSTRAINT "_BookToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PatentToUser" ADD CONSTRAINT "_PatentToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Patent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PatentToUser" ADD CONSTRAINT "_PatentToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
