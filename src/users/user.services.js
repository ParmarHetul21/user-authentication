import { Queries } from "../users/index.js";
import Response from "../common/createResponse.js";
import StatusCodes from "../common/statusCode.js";
import statusMessages from "../common/statusText.js";

const createUser = async (data) => {
	try {
		const { email } = data;
		const user = await Queries.fetchUserByEmail(email);

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

const Services = {
	createUser
};

export default Services;
