/*
  Warnings:

  - You are about to drop the `preRequisiteCourses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "preRequisiteCourses" DROP CONSTRAINT "preRequisiteCourses_courseId_fkey";

-- DropForeignKey
ALTER TABLE "preRequisiteCourses" DROP CONSTRAINT "preRequisiteCourses_preRequisiteId_fkey";

-- DropTable
DROP TABLE "preRequisiteCourses";

-- CreateTable
CREATE TABLE "pre_requisite_courses" (
    "courseId" TEXT NOT NULL,
    "preRequisiteId" TEXT NOT NULL,

    CONSTRAINT "pre_requisite_courses_pkey" PRIMARY KEY ("courseId","preRequisiteId")
);

-- AddForeignKey
ALTER TABLE "pre_requisite_courses" ADD CONSTRAINT "pre_requisite_courses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pre_requisite_courses" ADD CONSTRAINT "pre_requisite_courses_preRequisiteId_fkey" FOREIGN KEY ("preRequisiteId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
