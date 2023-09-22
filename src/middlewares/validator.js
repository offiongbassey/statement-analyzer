import { body } from "express-validator";
import { accountVerification, checkAllowedFields, titleCase } from "../helpers/validation";

export const user_validator = [
    body('account_name')
        .exists()
        .withMessage("Account Name is required")
        .notEmpty()
        .withMessage("Name cannot be empty")
        .trim()
        .customSanitizer(titleCase),
    body('account_no')
        .exists()
        .withMessage("Account Number is required")
        .notEmpty()
        .withMessage("Account Number cannot be empty")
        .isLength({ min: 10, max: 10 })
        .withMessage("Account Number must be 10 Digits")
        .trim()
        .custom(accountVerification),
    body('gender')
        .exists()
        .withMessage("Gender is required")
        .notEmpty()
        .withMessage("Gender cannot be empty")
        .isIn(['male', 'female'])
        .withMessage("Gender must be male or female"),
    body("bank")    
        .exists()
        .withMessage("Bank is required")
        .notEmpty()
        .withMessage("Bank cannot be empty")
        .trim(),
    body()
        .custom(body => checkAllowedFields(body, ['account_name', 'account_no', 'gender', 'bank']))
]