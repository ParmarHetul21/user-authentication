import nodemailer from "nodemailer";
import { username, password } from "../config/env.js";

export const sentEmail = async (email) => {
	try {
		const NUMBER_DIGITS = 4;
		const newPasscode = Math.random(NUMBER_DIGITS);
		const tranpoter = nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false,
			auth: {
				user: username,
				pass: password
			}
		});

		const info = await tranpoter.sendMail({
			from: "hetul.d.parmar.20@gmail.com",
			to: email,
			subject: "Your New Passcode Request",
			html: `<b>Your New Passcode is : ${newPasscode} </b>`
		});

		return { info, newPasscode };
	} catch (error) {
		console.log(error);
	}
};
