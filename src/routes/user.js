import express from "express";
import { createUser, viewUser, viewUsers } from "../controllers/user";
import { validationHandler } from "../helpers/validation";
import { user_validator } from "../middlewares/validator";

const router = express.Router();

router.post('/create-user', validationHandler(user_validator), createUser);
router.get('/user/:user_id', viewUser);
router.get('/users', viewUsers);


module.exports = router;