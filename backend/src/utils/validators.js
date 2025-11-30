
import { body } from "express-validator";

export const signupValidator = [
  body("name").isString().trim().isLength({ min: 2 }),
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 6 })
];

export const loginValidator = [
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 6 })
];

export const employeeValidator = [
  body("firstName").isString().trim().notEmpty(),
  body("lastName").isString().trim().notEmpty(),
  body("email").isEmail(),
  body("department").isString().trim().notEmpty(),
  body("position").isString().trim().notEmpty(),
  body("salary").isNumeric()
];
