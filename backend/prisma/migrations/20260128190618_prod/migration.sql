-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'BTECH', 'MTECH', 'PHD', 'INVESTIGATOR', 'INTERN', 'ALUMNI');

-- CreateEnum
CREATE TYPE "Designation" AS ENUM ('BTECH', 'MTECH', 'PHD', 'INVESTIGATOR', 'INTERN', 'ALUMNI');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "password" TEXT,
    "profileImage" TEXT,
    "designation" "Designation",
    "contactNumber" TEXT,
    "about" TEXT,
    "journals_count" INTEGER NOT NULL DEFAULT 0,
    "conferencePapers_count" INTEGER NOT NULL DEFAULT 0,
    "books_count" INTEGER NOT NULL DEFAULT 0,
    "patents_count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Social" (
    "id" SERIAL NOT NULL,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "iconURL" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResearchArea" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageURL" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ResearchFacility" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageURL" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResearchFacility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Journal_Paper" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authors" TEXT[],
    "journal" TEXT NOT NULL,
    "volume" TEXT,
    "year" INTEGER,
    "publicationDate" TIMESTAMP(3),
    "quartile" TEXT,
    "doi" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Journal_Paper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conference_Paper" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authors" TEXT[],
    "conference" TEXT NOT NULL,
    "location" TEXT,
    "year" INTEGER,
    "pages" TEXT,
    "indexing" TEXT,
    "doi" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Conference_Paper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book_Chapter" (
    "id" SERIAL NOT NULL,
    "chapterTitle" TEXT NOT NULL,
    "bookTitle" TEXT NOT NULL,
    "authors" TEXT[],
    "scopus" TEXT,
    "doi" TEXT,
    "publisher" TEXT,
    "year" INTEGER,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Book_Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authors" TEXT[],
    "publisher" TEXT,
    "scopus" TEXT,
    "doi" TEXT,
    "isbn" TEXT,
    "year" INTEGER,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "agency" TEXT,
    "role" TEXT,
    "outlay" DOUBLE PRECISION,
    "duration" TEXT,
    "pi" TEXT,
    "piInstitute" TEXT,
    "status" TEXT,
    "fundsReceived" DOUBLE PRECISION,
    "CreatedBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patent" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT,
    "grantNo" TEXT,
    "grantDate" TIMESTAMP(3),
    "publicationDate" TIMESTAMP(3),
    "inventors" TEXT[],
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Patent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutreachOrCourses" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OutreachOrCourses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "event" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageURL" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "PhotoGallery" (
    "id" SERIAL NOT NULL,
    "imageURL" TEXT NOT NULL,
    "tags" TEXT[],
    "groupMoment" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PhotoGallery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Social_id_key" ON "Social"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ResearchArea_id_key" ON "ResearchArea"("id");

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
CREATE UNIQUE INDEX "OutreachOrCourses_id_key" ON "OutreachOrCourses"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Event_id_key" ON "Event"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Highlight_id_key" ON "Highlight"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RecentUpdate_id_key" ON "RecentUpdate"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PhotoGallery_id_key" ON "PhotoGallery"("id");

-- AddForeignKey
ALTER TABLE "Social" ADD CONSTRAINT "Social_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
