import express from "express";
import user from "./user";

const router = express.Router();

router.use('/auth', user);

module.exports = router;