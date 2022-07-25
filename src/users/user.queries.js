import { User } from "./user.schemas.js";
import { ENC_KEY } from "../config/env.js";
import cryptojs from "crypto-js";
const { PBKDF2 } = cryptojs;

const fetchUserByEmail = async (email) => {
	try {
		const user = User.findOne({ email: email });
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

const Queries = {
	fetchUserByEmail,
	createUser
};

export default Queries;
