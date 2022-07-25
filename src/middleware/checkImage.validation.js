import StatusCodes from "../common/statusCode.js";
import statusMessages from "../common/statusText.js";

export const checkImageExists = (req, res, next) => {
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
