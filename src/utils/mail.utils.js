import nodemailer from "nodemailer";
import { USERNAME, PASSWORD } from "../config/env.js";

export const sentEmail = async (email) => {
	try {
		const thousands = 1000;
		const randomPasscode = Math.floor(
			thousands + Math.random() * thousands
		);

		const transport = nodemailer.createTransport({
			host: "smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: USERNAME,
				pass: PASSWORD
			}
		});

		const info = await transport.sendMail({
			from: "hetul.d.parmar.20@gmail.com",
			to: email,
			subject: "Passcode to Validate Email",
			text: "Your Passcode From GrumpySoul Corp. is :- " + randomPasscode
		});

		const response = { info, randomPasscode };
		return response;
	} catch (error) {
		console.log(error);
	}
};
