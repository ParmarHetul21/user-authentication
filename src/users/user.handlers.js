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

const fetchUser = async (req, res) => {
	const { statusCode, response } = await Services.getUserById(req.params.id);
	return res.status(statusCode).json(response);
};

const deleteUser = async (req, res) => {
	const { statusCode, response } = await Services.deleteUser(req.params.id);
	return res.status(statusCode).json(response);
};

const fetchUsers = async (req, res) => {
	const { statusCode, response } = await Services.fetchAllUser();
	return res.status(statusCode).json(response);
};

const handlers = {
	registerHandler,
	loginHandler,
	fetchUser,
	deleteUser,
	fetchUsers
};

export default handlers;
