import { Router } from "express";
import handlers from "./user.handlers.js";
import { upload } from "../utils/image.utils.js";
import middleware from "../middleware/validate.body.js";
import {
	emailSchemas,
	loginSchema,
	validatePassword,
	resgiterScehma,
	updateSchema
} from "./user.validations.js";
import { isAuthorized } from "../middleware/auth.js";

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
userRouter.get(
	"/:id",
	isAuthorized,
	middleware.validateObjectId,
	handlers.fetchUserHandler
);
userRouter.delete(
	"/delete/:id",
	isAuthorized,
	middleware.validateObjectId,
	handlers.deleteUserHandler
);
userRouter.get("/list/all", handlers.fetchUsersHandler);
userRouter.get(
	"/validate/:email",
	isAuthorized,
	middleware.validParams(emailSchemas),
	handlers.verfiyEmailWithMailHandler
);
userRouter.post(
	"/forgot/password",
	isAuthorized,
	middleware.validBody(validatePassword),
	handlers.forgotPasswordHandler
);
userRouter.patch(
	"/update/:id",
	[
		isAuthorized,
		[upload.single("userImage"), middleware.validateObjectId],
		middleware.validBody(updateSchema)
	],
	handlers.updateUserDetailsHandler
);

export default userRouter;
