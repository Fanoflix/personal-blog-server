/*
  Warnings:

  - You are about to drop the `SurveyAnswer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SurveyAnswer" DROP CONSTRAINT "SurveyAnswer_questionId_fkey";

-- DropForeignKey
ALTER TABLE "SurveyAnswer" DROP CONSTRAINT "SurveyAnswer_surveyResponseId_fkey";

-- DropTable
DROP TABLE "SurveyAnswer";

-- CreateTable
CREATE TABLE "SurveyQuestionAnswer" (
    "id" SERIAL NOT NULL,
    "surveyResponseId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "answerText" TEXT NOT NULL,
    "answerNumeric" INTEGER NOT NULL,

    CONSTRAINT "SurveyQuestionAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SurveyQuestionAnswer_surveyResponseId_idx" ON "SurveyQuestionAnswer"("surveyResponseId");

-- AddForeignKey
ALTER TABLE "SurveyQuestionAnswer" ADD CONSTRAINT "SurveyQuestionAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurveyQuestionAnswer" ADD CONSTRAINT "SurveyQuestionAnswer_surveyResponseId_fkey" FOREIGN KEY ("surveyResponseId") REFERENCES "SurveyResponse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
