import { Router } from "express";
import handlers from "./user.handlers.js";
import { upload } from "../utils/image.utils.js";
import middleware from "../middleware/checkBody.middleware.js";
import {
	emailSchemas,
	loginSchema,
	resgiterScehma
} from "./user.validations.js";

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
userRouter.get("/:id", middleware.validateObjectId, handlers.fetchUserHandler);
userRouter.delete(
	"/delete/:id",
	middleware.validateObjectId,
	handlers.deleteUserHandler
);
userRouter.get("/list/all", handlers.fetchUsersHandler);
userRouter.get(
	"/validate/:email",
	middleware.validParams(emailSchemas),
	handlers.verfiyEmailWithMailHandler
);

// userRouter.post(
// 	"/forgot-password",
// 	middleware.validateObjectId,
// 	middleware.checkPasscode,
// 	handlers.forgotPassword
// );

export default userRouter;
