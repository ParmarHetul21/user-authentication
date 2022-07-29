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

export const otpSchema = Joi.object({
	otp: Joi.number().max(MAX_NUM).required()
});

export const passwordSchema = Joi.object({
	password: Joi.string().required()
});
