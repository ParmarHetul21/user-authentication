import Joi from "joi";

const MAX_NUM = 4;

export const resgiterScehma = Joi.object({
	fullName: Joi.string().required(),
	email: Joi.string().email().required(),
	gender: Joi.string().required(),
	joinDate: Joi.string().required(),
	password: Joi.string().required()
});

export const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required()
});

export const emailSchemas = Joi.object({
	email: Joi.string().email().required()
});

export const validatePassword = Joi.object({
	password: Joi.string().required(),
	otp: Joi.number().required()
});
