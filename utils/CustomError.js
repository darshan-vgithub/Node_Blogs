class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode <= 500 ? "fail" : "error";

    // ability to catch the error and give it to the captureStackTrace

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CustomError;
