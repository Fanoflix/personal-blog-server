import httpCodes from "../config/httpCodes.js";
import generalMessages from "../config/generalMessages.js";
import ApiError from "../utils/ApiError.js";
import errorHandler from "../utils/errorHandler.js";
import PrismaPackage from "@prisma/client";

const { PrismaClient } = PrismaPackage;
const prisma = new PrismaClient();

export const add = async (req, res, next) => {
  try {
    console.log("\n\n\nyo");
    console.log(req.body.data);
    // console.log(surveyResponse.survey.questions);
    // const surveyResponse = req.body.surveyResponse;

    res.status(httpCodes.created).json({
      message: "Successfully created the response",
      // surveyResponse
    });
  } catch (err) {
    next(errorHandler(err));
  }
};

export const get = async (req, res, next) => {};
