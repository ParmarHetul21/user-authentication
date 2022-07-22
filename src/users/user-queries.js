import { User } from "./user.schemas.js";

const fetchUserByEmail = async (email) => {
	let user = User.findOne({ email: email });
	return user;
};

const createUser = async (data) => {
	let newUser = await User.create(data);
	if (newUser) {
		return newUser;
	}
};

export default {
	fetchUserByEmail,
	createUser
};
