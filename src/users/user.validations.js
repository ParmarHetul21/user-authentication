import Joi from "joi";

export const resgiterScehma = Joi.object({
	fullName: Joi.string().required(),
	email: Joi.string().email().required(),
	gender: Joi.string().required(),
	joinDate: Joi.string().required(),
	password: Joi.string().required(),
	userImage: Joi.string().required()
});

export const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required()
});
