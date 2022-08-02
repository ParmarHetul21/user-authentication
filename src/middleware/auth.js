import jwt from "jsonwebtoken";
import Response from "../common/response.common.js";
import StatusCodes from "../common/statuscode.common.js";
import statusMessages from "../common/statustext.common.js";
import { JWT_KEY } from "../config/env.js";

export const isAuthorized = (req, res, next) => {
	try {
		const index = 1;
		if (!req.headers["authorization"]?.split(" ")[index]) {
			const { statusCode, response } = Response.createResponse(
				StatusCodes.UNAUTHORIZED,
				{
					message: statusMessages.UNAUTHORIZED
				}
			);
			return res.status(statusCode).json(response);
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
