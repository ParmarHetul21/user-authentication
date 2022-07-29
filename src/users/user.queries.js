import { User } from "./user.schemas.js";
import { ENC_KEY } from "../config/env.js";
import cryptojs from "crypto-js";
const { PBKDF2 } = cryptojs;

const fetchUserByEmail = async (email) => {
	try {
		const user = User.findOne({ email: email })
			.select({
				__v: 0
			})
			.lean();
		return user;
	} catch (error) {
		console.log(error);
	}
};

const createUser = async (data) => {
	try {
		const encrypted = PBKDF2(data.password, data.email, ENC_KEY);
		const newUser = await User.create({ ...data, password: encrypted });
		delete newUser.password;
		if (newUser) {
			return newUser;
		}
	} catch (error) {
		console.log(error);
	}
};

const fetchUserById = async (id) => {
	const userById = await User.findById(id)
		.select({
			_id: 0,
			__v: 0,
			password: 0
		})
		.lean();
	return userById;
};

const deleteUserById = async (id) => {
	const deletedUser = await User.findByIdAndDelete(id);
	return deletedUser;
};

const fetchAllUser = async () => {
	const allUser = await User.find().select({
		__v: 0,
		passcode: 0,
		password: 0
	});
	return allUser;
};

const changePassword = async (id, newPassword) => {
	const userDetails = await User.findByIdAndUpdate(id, {
		password: newPassword
	}).lean();
	return userDetails;
};

const updatePasscode = async (id, passcode) => {
	const userDetails = await User.findByIdAndUpdate(id, {
		passcode: passcode
	});
	return userDetails;
};

const Queries = {
	fetchUserByEmail,
	createUser,
	fetchUserById,
	deleteUserById,
	fetchAllUser,
	changePassword,
	updatePasscode
};

export default Queries;
