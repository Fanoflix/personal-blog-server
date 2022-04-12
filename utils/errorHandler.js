import httpCodes from "../config/httpCodes.js";
import generalMessages from "../config/generalMessages.js";
import ApiError from "./ApiError.js";
import PrismaPackage from "@prisma/client";

const { Prisma } = PrismaPackage;

export default function errorHandler(err, resourceName = "<Resource>") {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code == "P2002") {
      return new ApiError(
        httpCodes.conflict,
        `"${resourceName}" already exists. Unique constraint failed.`
      );
    }
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    return new ApiError(
      httpCodes.badRequest,
      `Validation failed. For example, a field is missing, or an incorrect field type was provided.`
    );
  } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    return new ApiError(httpCodes.internal, generalMessages.internal);
  } else return err;
}
