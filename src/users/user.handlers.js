import Services from "./user.services.js";
import { sentEmail } from "../utils/mail.utils.js";
import StatusCodes from "../common/statuscode.common.js";
import statusMessages from "../common/statustext.common.js";

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

const forgotPassword = async (req, res) => {
	const { statusCode, response } = await Services.changePasscode(
		req.params.id,
		req.body.password
	);
	return res.status(statusCode).json(response);
};

const verfiyEmailWithMail = async (req, res) => {
	const { info, passcode } = await sentEmail(req.body.email);
	console.log(info, passcode);
	if (!info || !passcode) {
		res.status(StatusCodes.BAD_REQUEST).json({
			message: statusMessages.BAD_REQUEST
		});
	}
	res.status(StatusCodes.OK).json({
		message: statusMessages.OK
	});
};

const handlers = {
	registerHandler,
	loginHandler,
	fetchUser,
	deleteUser,
	fetchUsers,
	forgotPassword,
	verfiyEmailWithMail
};

export default handlers;
