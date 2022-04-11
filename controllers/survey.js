import httpCodes from "../config/httpCodes.js";
import ApiError from "../utils/ApiError.js";
import PrismaPackage from "@prisma/client";
const { PrismaClient } = PrismaPackage;
const prisma = new PrismaClient();

export const create = async (req, res, next) => {
  try {
    const { surveyTitle, instructions, otherInfo } = req.body;

    const survey = await prisma.survey.create({
      data: {
        surveyTitle,
        instructions,
        otherInfo,
      },
    });

    // Todo: Create many questions sent from the client (not doing it now)
    // const questions = await prisma.question.createMany()

    res.status(httpCodes.created).json({
      survey,
      meesage: "Survey created successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const get = async (req, res, next) => {
  try {
    const surveyId = parseInt(req.params.id);

    const survey = await prisma.survey.findUnique({
      where: {
        id: surveyId,
      },
      include: {
        questions: {
          include: {
            questionChoices: true,
          },
        },
      },
    });

    if (!survey) throw new ApiError(httpCodes.notFound, "Survey not found");

    res.status(httpCodes.ok).json({
      message: "Survey retrieved succcessfully.",
      survey,
    });
  } catch (err) {
    next(err);
  }
};
