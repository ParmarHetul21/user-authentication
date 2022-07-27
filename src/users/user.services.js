import { Queries } from "../users/index.js";
import Response from "../common/response.common.js";
import { ENC_KEY, JWT_KEY } from "../config/env.js";
import StatusCodes from "../common/statuscode.common.js";
import jwt from "jsonwebtoken";
import statusMessages from "../common/statustext.common.js";
import cryptojs from "crypto-js";
const { PBKDF2 } = cryptojs;

const createUser = async (data) => {
	try {
		const user = await Queries.fetchUserByEmail(data.email);

		if (user) {
			return Response.createResponse(StatusCodes.CONFLICT, {
				message: statusMessages.CONFLICT
			});
		}

		const newUser = await Queries.createUser(data);
		if (newUser) {
			return Response.createResponse(StatusCodes.OK, {
				message: statusMessages.OK
			});
		}
		return Response.createResponse(StatusCodes.NOT_FOUND, {
			message: statusMessages.NOT_FOUND
		});
	} catch (error) {
		console.log(error);
	}
};

const loginuser = async (data) => {
	const user = await Queries.fetchUserByEmail(data.email);
	if (!user) {
		return Response.createResponse(StatusCodes.NOT_FOUND, {
			message: statusMessages.NOT_FOUND
		});
	}

	const encrypted = PBKDF2(data.password, user.email, ENC_KEY);
	const { password, ...userData } = user;
	if (!password) {
		return Response.createResponse(StatusCodes.SEE_OTHER, {
			message: statusMessages.SEE_OTHER
		});
	}

	if (encrypted.toString() === password) {
		delete user.password;
		const jwtToken = jwt.sign(JSON.stringify(userData), JWT_KEY);
		return Response.createResponse(StatusCodes.OK, {
			user: user,
			jwtToken
		});
	}

	return Response.createResponse(StatusCodes.UNAUTHORIZED, {
		message: statusMessages.UNAUTHORIZED
	});
};

const Services = {
	createUser,
	loginuser
};

export default Services;
