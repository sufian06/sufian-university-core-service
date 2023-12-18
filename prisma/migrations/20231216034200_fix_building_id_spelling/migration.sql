/*
  Warnings:

  - You are about to drop the column `buildingID` on the `rooms` table. All the data in the column will be lost.
  - Added the required column `buildingId` to the `rooms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "rooms" DROP CONSTRAINT "rooms_buildingID_fkey";

-- AlterTable
ALTER TABLE "rooms" DROP COLUMN "buildingID",
ADD COLUMN     "buildingId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "buildings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
