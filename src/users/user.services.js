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
	try {
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
	} catch (error) {
		console.log(error);
	}
};

const getUserById = async (id) => {
	try {
		const userDetails = await Queries.fetchUserById(id);
		if (!userDetails) {
			return Response.createResponse(StatusCodes.NOT_FOUND, {
				message: statusMessages.NOT_FOUND
			});
		}

		return Response.createResponse(StatusCodes.OK, {
			user: userDetails,
			message: statusMessages.OK
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteUser = async (id) => {
	try {
		const deleteUser = await Queries.deleteUserById(id);
		if (!deleteUser) {
			return Response.createResponse(StatusCodes.NOT_FOUND, {
				message: statusMessages.NOT_FOUND
			});
		}
		return Response.createResponse(StatusCodes.OK, {
			message: statusMessages.OK
		});
	} catch (error) {
		console.log(error);
	}
};

const fetchAllUser = async () => {
	try {
		const fetchUser = await Queries.fetchAllUser();
		if (!fetchUser) {
			return Response.createResponse(StatusCodes.NOT_FOUND, {
				message: statusMessages.NOT_FOUND
			});
		}
		return Response.createResponse(StatusCodes.OK, {
			user: fetchUser,
			message: statusMessages.OK
		});
	} catch (error) {
		console.log(error);
	}
};

const Services = {
	createUser,
	loginuser,
	getUserById,
	deleteUser,
	fetchAllUser
};

export default Services;
