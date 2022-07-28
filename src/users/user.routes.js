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
userRouter.get("/:id", middleware.validateObjectId, handlers.fetchUser);
userRouter.delete(
	"/delete/:id",
	middleware.validateObjectId,
	handlers.deleteUser
);
userRouter.get("/list/all", handlers.fetchUsers);

export default userRouter;
