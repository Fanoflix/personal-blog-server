import httpCodes from "../config/httpCodes.js";
import generalMessages from "../config/generalMessages.js";
import ApiError from "../utils/ApiError.js";
import errorHandler from "../utils/errorHandler.js";
import PrismaPackage from "@prisma/client";

const { PrismaClient } = PrismaPackage;
const prisma = new PrismaClient();
