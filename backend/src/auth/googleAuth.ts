import { google } from "googleapis";
import "dotenv/config";
import axios from "axios";
const envMode = process.env.NODE_ENV || "development";
const oauth2Client = new google.auth.OAuth2(
	process.env.CLIENT_ID!,
	process.env.CLIENT_SECRET!,
	envMode === "production"
		? "https://lab.nasl.in/users/googleCallback.html"
		: "http://localhost:8080/users/googleCallback.html"
);

export const getUserInfo = async (code: string) => {
	const { tokens } = await oauth2Client.getToken({
		code: code,
		redirect_uri:
			envMode === "production"
				? "https://lab.nasl.in/users/googleCallback.html"
				: "http://localhost:8080/users/googleCallback.html",
	});
	oauth2Client.setCredentials(tokens);
	const { data } = await axios.get(
		`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
	);
	return data;
};
