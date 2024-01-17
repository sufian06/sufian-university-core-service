/*
  Warnings:

  - The values [SATURTDAY,TUESdAY] on the enum `WeekDays` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "WeekDays_new" AS ENUM ('SATURDAY', 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY');
ALTER TABLE "offered_course_class_schedules" ALTER COLUMN "dayOfWeek" DROP DEFAULT;
ALTER TABLE "offered_course_class_schedules" ALTER COLUMN "dayOfWeek" TYPE "WeekDays_new" USING ("dayOfWeek"::text::"WeekDays_new");
ALTER TYPE "WeekDays" RENAME TO "WeekDays_old";
ALTER TYPE "WeekDays_new" RENAME TO "WeekDays";
DROP TYPE "WeekDays_old";
ALTER TABLE "offered_course_class_schedules" ALTER COLUMN "dayOfWeek" SET DEFAULT 'SATURDAY';
COMMIT;

-- AlterTable
ALTER TABLE "offered_course_class_schedules" ALTER COLUMN "dayOfWeek" SET DEFAULT 'SATURDAY';
