import nodemailer from 'nodemailer';

import { SMTP_HOST, SMPT_AUTH_USER, SMPT_AUTH_PASS, SMPT_SENDER } from '$env/static/private';

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: 587,
	secure: false,
	auth: {
		user: SMPT_AUTH_USER,
		pass: SMPT_AUTH_PASS
	}
});

const sender = async (to: string, subject: string, text: string) => {
	try {
		const sent = await transporter.sendMail({
			from: SMPT_SENDER,
			to,
			subject,
			text
		});
		console.log(sent);
		console.log(to, subject, text);
	} catch (error) {
		console.error('Error sending email:', error);
	}
};

export default sender;
