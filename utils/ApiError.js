class ApiError extends Error {
  constructor(statusCode, errorMessage, isOperational = true, stack = "") {
    super(errorMessage);
    this.statusCode = statusCode;
    this.errorMessage = errorMessage;
    this.isOperational = isOperational;
    
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
