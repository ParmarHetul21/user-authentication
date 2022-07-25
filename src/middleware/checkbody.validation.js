import { resgiterScehma } from "../users/user.validations.js";
import StatusCodes from "../common/statusCode.js";
import statusMessages from "../common/statusText.js";

export const checkBody = (req, res, next) => {
	const valid = resgiterScehma.validate(req.body);
	if (valid.error) {
		res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: statusMessages.BAD_REQUEST,
			error: valid.error.message
		});
	} else {
		next();
	}
};
