import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	fullName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	joinDate: {
		type: String,
		default: Date.now()
	},
	password: {
		type: String,
		required: true
	},
	userImage: {
		type: String,
		default:
			"https://res.cloudinary.com/dzujgoodl/image/upload/v1620985191/default-profile-image_gy7rls.png"
	}
});

export const User = mongoose.model("User", userSchema);
