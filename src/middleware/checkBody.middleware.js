import mongoose from "mongoose";
import StatusCodes from "../common/statuscode.common.js";
import statusMessages from "../common/statustext.common.js";

const validBody = (schema) => (req, res, next) => {
	try {
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
	} catch (error) {
		console.log(error);
	}
};

const checkImageExists = (req, res, next) => {
	try {
		if (!req.file) {
			res.status(StatusCodes.BAD_REQUEST).json({
				success: false,
				message: "Image File not uploaded",
				error: statusMessages.BAD_REQUEST
			});
		} else {
			next();
		}
	} catch (error) {
		console.log(error);
	}
};

const validateObjectId = (req, res, next) => {
	try {
		const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
		if (!isValidObjectId) {
			res.status(StatusCodes.BAD_REQUEST).json({
				success: false,
				message: "ObjectId is not valid",
				error: statusMessages.BAD_REQUEST
			});
		} else {
			next();
		}
	} catch (error) {
		console.log(error);
	}
};

const checkPasscode = (req, res, next) => {
	try {
		const password = req.body.password;
		if (!password) {
			res.status(StatusCodes.BAD_REQUEST).json({
				success: false,
				message: "password field not found",
				error: statusMessages.BAD_REQUEST
			});
		} else {
			next();
		}
	} catch (error) {
		console.log(error);
	}
};

const middleware = {
	checkImageExists,
	validBody,
	validateObjectId,
	checkPasscode
};

export default middleware;
