import { body } from "express-validator";

const userRegisterValidator = () => {
  return [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLowercase()
      .withMessage("Username must be lowercase")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters long"),
    body("email")
      .isEmail()
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isLowercase()
      .withMessage("Email must be lowercase"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    body("fullName")
      .trim()
      .notEmpty()
      .withMessage("Full name is required")
      .isLength({ min: 3 })
      .withMessage("Full name must be at least 3 characters long"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email")
      .isEmail()
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isLowercase()
      .withMessage("Email must be lowercase"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ];
};

const userChangeCurrentPasswordValidator = () => {
  return [
    body("oldPassword")
      .trim()
      .notEmpty()
      .withMessage("Old password is required"),
    body("newPassword")
      .trim()
      .notEmpty()
      .withMessage("New password is required")
      .isLength({ min: 8 })
      .withMessage("New password must be at least 8 characters long"),
  ];
};

const userForgotPasswordValidator = () => {
  return [
    body("email")
      .isEmail()
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isLowercase()
      .withMessage("Email must be lowercase"),
  ];
};

const userResetForgotPasswordValidator = () => {
  return [
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ];
};




export { userRegisterValidator, userLoginValidator, userChangeCurrentPasswordValidator, userForgotPasswordValidator, userResetForgotPasswordValidator };
