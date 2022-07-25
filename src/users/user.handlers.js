import Services from "./user.services.js";

export const registerHandler = async (req, res) => {
	const data = { ...req.body, userImage: req.file.path };
	const { statusCode, response } = await Services.createUser(data);
	res.status(statusCode).json(response);
};
