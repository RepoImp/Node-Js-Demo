const UserRole = {
  USER: "user",
  ADMIN: "admin",
  ROOT: "root",
};

const UserStatus = {
  NOT_APPROVED: "not_approved",
  APPROVED: "approved",
  REJECTED: "rejected",
};

const MSG = {
  INSERT_SUCCESS: "InsIert successfully",
  CREATE_SUCCESS: "Create successfully",
  UPDATE_SUCCESS: "Update successfully",
  DELETE_SUCCESS: "Delete successfully",
  FOUND_SUCCESS: "Found successfully",
  LOGIN_SUCCESS: "Login successfully",
  LOGOUT_SUCCESS: "Logout successfully",
  SIGNUP_SUCCESS: "Signup successfully",
  SIGNIN_SUCCESS: "Signin successfully",
  PASSWORD_RESET_SUCCESS: "Password reset successfully",
  UPLOAD_SUCCESS: "Upload successfully",

  LIKE_SUCCESS: "Like successfully",
  COMMENT_SUCCESS: "Like successfully",
  UNFOLLOW_SUCCESS: "Unfollow successfully",
  FOLLOW_SUCCESS: "Follow successfully",

  EMAIL_TAKEN: "Email already taken by user!",
  EMAIL_INVALID: "Invalid email id!",
  CREDENTIALS_WRONG: "Incorrect email/password!",
  TOKEN_EMPTY: "No token, authorization denied!",
  TOKEN_INVALID: "Invalid token, authorization denied!",
  APIKEY_EMPTY: "No apikey, authorization denied!",
  APIKEY_INVALID: "Invalid apikey, authorization denied!",
  INVALID_ID: "Invalid Object id, please pass valid id!",
  INVITATION_NOT_SET: "Invitation code is not set!",
  INVITATION_INCORRECT: "Incorrect invitation code!",
  INVITATION_REQUIRED: "Invitation code is required.!",

  NOT_FOUND: "Not found!",
  EMPTY: "Empty!",
  INVALID: "Invalid!",
  SUCCESS: "Success",
  FAILED: "Failed!",
  POST_NOT_FOUND: "Post not found!",
  POST_LIKED:"Post already liked!",
  POST_NOT_LIKED: "Post has not yet liked!",
  FOLLOWED:"Already followd!",
  NOT_FOLLOWED:"User has not yet been followd!",
  USER_NOT_FOUND:"User not found",
  NO_AUTH_DATA:"User has no auth data",
  INVALID_PASSWORD:"Invalid password",
  WRONG_USERNAME_PASSWORD: "Username or password is wrong!",
  LOGIN_FIRST:"Please Login first to continue",
  SERVER_ERROR:'Internal server error!',
  PERMISSION_ERROR:"You don't have permission to perform this action!"
};

module.exports = { UserRole, UserStatus, MSG };
