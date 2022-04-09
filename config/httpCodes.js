const informationalResponse = Object.freeze({});

const successfulResponse = Object.freeze({
  ok: 200,
  created: 201,
  accepted: 202,
});

const redirectionResponse = Object.freeze({});

const clientErrorResponse = Object.freeze({
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  timeout: 408,
});

const serverErrorResponse = Object.freeze({
  internal: 500,
});

export default Object.freeze({
  informationalResponse, // 100 - 199
  successfulResponse, // 200 - 299
  redirectionResponse, // 300 - 399
  clientErrorResponse, // 400 - 499
  serverErrorResponse, // 500 - 599
});
