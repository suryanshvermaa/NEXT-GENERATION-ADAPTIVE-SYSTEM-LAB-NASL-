/*
  Warnings:

  - You are about to drop the `Outreach` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Outreach";

-- CreateTable
CREATE TABLE "OutreachOrCourses" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OutreachOrCourses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OutreachOrCourses_id_key" ON "OutreachOrCourses"("id");
