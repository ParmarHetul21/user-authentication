import Services from "./user.services.js";

const registerHandler = async (req, res) => {
	const data = { ...req.body, userImage: req.file.path };
	const { statusCode, response } = await Services.createUser(data);
	res.status(statusCode).json(response);
};

const loginHandler = async (req, res) => {
	const { statusCode, response } = await Services.loginuser(req.body);
	res.status(statusCode).json(response);
};

const handlers = {
	registerHandler,
	loginHandler
};

export default handlers;
