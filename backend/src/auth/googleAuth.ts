import { google } from "googleapis";
import "dotenv/config";
import axios from "axios";
const oauth2Client = new google.auth.OAuth2(
	process.env.CLIENT_ID!,
	process.env.CLIENT_SECRET!,
	"https://nasl-lab-nitp.vercel.app/users/googleCallback.html"
);

export const getUserInfo = async (code: string) => {
	const { tokens } = await oauth2Client.getToken({
		code:code,
		redirect_uri:"https://nasl-lab-nitp.vercel.app/users/googleCallback.html"
	});
	oauth2Client.setCredentials(tokens);
	const { data } = await axios.get(
		`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
	);
	return data;
};
