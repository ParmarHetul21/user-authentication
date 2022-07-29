import jwt from "jsonwebtoken";
import StatusCodes from "../common/statuscode.common.js";
import statusMessages from "../common/statustext.common.js";
import { JWT_KEY } from "../config/env.js";

export const isAuthorized = (req, res, next) => {
	try {
		const index = 1;
		if (!req.headers["authorization"]?.split(" ")[index]) {
			res.status(StatusCodes.UNAUTHORIZED).json(
				statusMessages.UNAUTHORIZED
			);
		}
		const data = jwt.verify(
			req.headers["authorization"]?.split(" ")[index],
			JWT_KEY
		);
		req.user = data;
		next();
	} catch (error) {
		console.log(error);
	}
};
