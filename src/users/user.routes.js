import { Router } from "express";
import { registerHandler } from "./user.handlers.js";
// import { checkBody } from "../middleware/checkbody.validation.js";
import uploadImage from "../utils/ImageUpload.js";
import { checkBody } from "../middleware/checkbody.validation.js";
import { checkImageExists } from "../middleware/checkImage.validation.js";

const userRouter = Router();

userRouter.post(
	"/register",
	uploadImage.single("userImage"),
	checkImageExists,
	checkBody,
	registerHandler
);

export default userRouter;
