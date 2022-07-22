import { resgiterScehma } from "../users/user.validations.js";

export const checkBody = (req, res, next) => {
	const valid = resgiterScehma.validate(req.body);
	if (valid.error) {
		res.status(400).json({
			success: false,
			message: "something went wrong",
			error: valid.error.message
		});
	} else {
		next();
	}
};
