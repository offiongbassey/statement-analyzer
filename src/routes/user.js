import express from "express";
import { createUser } from "../controllers/user";
import { validationHandler } from "../helpers/validation";
import { user_validator } from "../middlewares/validator";

const router = express.Router();

router.post('/create-user', validationHandler(user_validator), createUser);

module.exports = router;