console.log("Setting up fresh DB");

import PrismaPackage from "@prisma/client";
const { PrismaClient } = PrismaPackage;
const prisma = new PrismaClient();

async function SetupDb() {
  const allSurveys = await prisma.survey.findMany();
  console.log(allSurveys);
}

SetupDb()
  .then(() => {
    console.log("Successfully Created Fresh Database");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
