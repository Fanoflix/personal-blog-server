const httpCodes = {
  // successfulResponse
  ok: 200,
  created: 201,
  accepted: 202,

  // clientErrorResponse
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  timeout: 408,

  // serverErrorResponse
  internal: 500,
};

export default httpCodes;
