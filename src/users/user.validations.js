import Joi from "joi";

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

export const updateSchema = Joi.object({
	fullName: Joi.string().not().empty().optional(),
	email: Joi.string().email().not().empty().optional(),
	gender: Joi.string().not().empty().optional()
});
