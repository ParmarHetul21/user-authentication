import userRouter from "./user.routes.js";
import { registerHandler } from "./user.handlers.js";
import { User } from "./user.schemas.js";
import { resgiterScehma, loginSchema } from "./user.validations.js";
import Queries from "./user.queries.js";

export {
	userRouter,
	registerHandler,
	resgiterScehma,
	loginSchema,
	User,
	Queries
};
