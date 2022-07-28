import nodemailer from "nodemailer";

export const sentEmail = async (email) => {
	try {
		const newPasscode = 2111;
		const tranpoter = nodemailer.createTransport({
			host: "smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: "3736b3c5d8818b",
				pass: "35a699ce7fcc1d"
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
