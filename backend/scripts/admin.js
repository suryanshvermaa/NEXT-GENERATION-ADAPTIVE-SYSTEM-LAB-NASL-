const { PrismaClient } = require("../generated/prisma");
const readline = require("readline");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function askQuestion(query) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve) =>
		rl.question(query, (ans) => {
			rl.close();
			resolve(ans);
		})
	);
}
async function createAdmin() {
	const name = await askQuestion("name: ");
	const email = await askQuestion("email: ");
	const password = await askQuestion("password: ");
	const profileImage = await askQuestion("profile ImageUrl: ");
	console.log(await bcrypt.hash(password, 10));
	const isExisting = await prisma.user.findUnique({
		where: {
			email,
		},
	});
	if (isExisting) {
		console.log("Email already exist!");
		process.exit(1);
	}
	const user = await prisma.user.create({
		data: {
			email,
			password: await bcrypt.hash(password, 10),
			name,
			profileImage,
		},
	});
	return user;
}

createAdmin()
	.then((user) => {
		console.log("Admin created");
		console.log(user);
	})
	.catch((e) => {
		console.log("error in creating admin", e.message);
	});
