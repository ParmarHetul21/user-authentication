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

const fetchUserHandler = async (req, res) => {
	const { statusCode, response } = await Services.getUserById(req.params.id);
	return res.status(statusCode).json(response);
};

const deleteUserHandler = async (req, res) => {
	const { statusCode, response } = await Services.deleteUser(req.params.id);
	return res.status(statusCode).json(response);
};

const fetchUsersHandler = async (req, res) => {
	const { statusCode, response } = await Services.fetchAllUser();
	return res.status(statusCode).json(response);
};

const verfiyEmailWithMailHandler = async (req, res) => {
	const { statusCode, response } = await Services.verifyMail(
		req.params.email
	);
	return res.status(statusCode).json(response);
};

const forgotPasswordHandler = async (req, res) => {
	const { statusCode, response } = await Services.changePasscode(
		req.body.otp,
		req.body.password
	);
	console.log(statusCode, response);
	return res.status(statusCode).json(response);
};

const updateUserDetails = async (req, res) => {
	const { statusCode, response } = await Services.updateUser(
		req.params.id,
		req.body
	);
	res.status(statusCode).json(response);
};

const handlers = {
	registerHandler,
	loginHandler,
	fetchUserHandler,
	deleteUserHandler,
	fetchUsersHandler,
	forgotPasswordHandler,
	verfiyEmailWithMailHandler,
	updateUserDetails
};

export default handlers;
