import StatusCodes from "../common/statuscode.common.js";
import statusMessages from "../common/statustext.common.js";

const validBody = (schema) => (req, res, next) => {
	console.log(req.body);
	const valid = schema.validate(req.body);
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

const checkImageExists = (req, res, next) => {
	if (!req.file) {
		res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "Image File not uploaded",
			error: statusMessages.BAD_REQUEST
		});
	} else {
		next();
	}
};

const middleware = {
	checkImageExists,
	validBody
};

export default middleware;
