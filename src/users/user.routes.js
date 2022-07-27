import { Router } from "express";
import handlers from "./user.handlers.js";
import { upload } from "../utils/image.utils.js";
import middleware from "../middleware/checkBody.middleware.js";
import { loginSchema, resgiterScehma } from "./user.validations.js";

const userRouter = Router();

userRouter.post(
	"/register",
	[
		upload.single("userImage"),
		middleware.checkImageExists,
		middleware.validBody(resgiterScehma)
	],
	handlers.registerHandler
);

userRouter.post(
	"/login",
	middleware.validBody(loginSchema),
	handlers.loginHandler
);

export default userRouter;
