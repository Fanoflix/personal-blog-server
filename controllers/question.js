import httpCodes from "../config/httpCodes.js";
import ApiError from "../utils/ApiError.js";
import PrismaPackage from "@prisma/client";
const { PrismaClient } = PrismaPackage;
const prisma = new PrismaClient();
