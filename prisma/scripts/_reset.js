import PrismaPackage from "@prisma/client";
const { PrismaClient } = PrismaPackage;
const prisma = new PrismaClient();

const tablenames = [
  "Survey",
  "SurveyQuestionAnswer",
  "SurveyResponse",
  "Question",
  "QuestionChoice",
  "Respondant",
];

async function truncateAllTables() {
  for (const tablename of tablenames) {
    if (tablename !== "_prisma_migrations") {
      console.info(`Truncating ${tablename}...`);
      await prisma.$executeRawUnsafe(`TRUNCATE "${tablename}" CASCADE`);
    }
  }
}

console.info("Executing Truncation for all Tables...");
truncateAllTables()
  .then(() => {
    console.info("Successfully Truncated All tables!");
  })
  .catch((err) => {
    console.error(`Error while truncating tables: ${err}`);
  });
