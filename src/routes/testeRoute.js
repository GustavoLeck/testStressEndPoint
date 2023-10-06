import express from "express";
import { TestController } from "../controller/teste-controller.js";

const router = express.Router();
router.post("/test", new TestController().handle);

export default router;
