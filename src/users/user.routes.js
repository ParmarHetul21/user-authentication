import { Router } from "express";
import { registerHandler } from "./user.handlers.js";
import { checkBody } from "../middleware/checkbody.validation.js";

const userRouter = Router();

userRouter.post("/register", checkBody, registerHandler);

export default userRouter;
