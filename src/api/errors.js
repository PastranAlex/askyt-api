class BaseError extends Error {
  constructor(message, extra) {
      super(message)
      this.name = this.constructor.name;
      this.message = message;
      Error.captureStackTrace(this, this.constructor)
      if (extra) this.extra = extra;
  }
}

//example
module.exports.NotFound = class NotFound extends BaseError{};
module.exports.UserError = class UserError extends BaseError{};