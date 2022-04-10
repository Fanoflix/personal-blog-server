/*
  Warnings:

  - A unique constraint covering the columns `[surveyId,title]` on the table `Question` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "SurveyQuestionAnswer" ADD COLUMN     "answerChoiceText" TEXT,
ALTER COLUMN "answerText" DROP NOT NULL,
ALTER COLUMN "answerNumeric" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Question_surveyId_title_key" ON "Question"("surveyId", "title");
