console.log("Setting up fresh DB");

import PrismaPackage from "@prisma/client";
const { PrismaClient } = PrismaPackage;
const prisma = new PrismaClient();

async function SetupDb() {
  const allSurveys = await prisma.survey.findMany();
  console.log(allSurveys);
}

console.log("Creating fresh database with initial dummy data...");
SetupDb()
  .then(() => {
    console.log("Successfully created fresh database!");
  })
  .catch((err) => {
    console.log(`Error while setting up db: ${err}`);
  });
