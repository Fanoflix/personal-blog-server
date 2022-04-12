// PrismaClientValidationError Prisma Client throws a PrismaClientValidationError exception if validation fails - for example:
// Missing field - for example, an empty data: {} property when creating a new record
// Incorrect field type provided (for example, setting a Boolean field to "Hello, I like cheese and gold!")

import httpCodes from "../config/httpCodes.js";
import generalMessages from "../config/generalMessages.js";
import ApiError from "./ApiError.js";
import PrismaPackage from "@prisma/client";

const { Prisma } = PrismaPackage;

export default function errorHandler(err) {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code == "P2002") {
      return new ApiError(
        httpCodes.conflict,
        `${err.meta.target} already exists. Unique constraint failed.`
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
