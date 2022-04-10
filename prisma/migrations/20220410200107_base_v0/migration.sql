/*
  Warnings:

  - The `type` column on the `Question` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('text', 'textarea', 'radio', 'number', 'multiple');

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "type",
ADD COLUMN     "type" "Type" NOT NULL DEFAULT E'text';
