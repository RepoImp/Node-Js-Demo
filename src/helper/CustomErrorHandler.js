const { MSG } = require("./constant");

class CustomErrorHandler extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }

  static alreadyExist(message) {
    return new CustomErrorHandler(409, message);
  }

  static wrongCredentials(message = MSG.WRONG_USERNAME_PASSWORD) {
    return new CustomErrorHandler(401, message);
  }

  static unAuthorized(message = MSG.LOGIN_FIRST) {
    return new CustomErrorHandler(401, message);
  }

  static notFound(message = MSG.NOT_FOUND) {
    return new CustomErrorHandler(404, message);
  }

  static userNotFound(message = MSG.USER_NOT_FOUND) {
    return new CustomErrorHandler(404, message);
  }

  static badRequest(message = MSG.NOT_FOUND) {
    return new CustomErrorHandler(400, message);
  }

  static forbidden(
    message = MSG.PERMISSION_ERROR
  ) {
    return new CustomErrorHandler(403, message);
  }

  static serverError(message = MSG.SERVER_ERROR) {
    return new CustomErrorHandler(500, message);
  }
}
module.exports = CustomErrorHandler;
