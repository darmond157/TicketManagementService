const bcrypt = require("bcrypt");

const LoginHandler = async (request, reply, fastify) => {
	const { username: enteredUsername, password: enteredPassword } = request.body;
	if (!enteredPassword || !enteredUsername) return reply.code(400).send("EF");

	const loginQueryString = "SELECT * FROM users WHERE username=$1";
	const loginQueryResult = await fastify.pg.query(loginQueryString, [
		enteredUsername,
	]);

	if (!loginQueryResult.rows.length) return reply.code(401).send("UNE");

	const userObjectFromDB = loginQueryResult.rows[0];
	const userPasswordInDB = userObjectFromDB.password;
	const doPasswordsMatch = await bcrypt.compare(
		enteredPassword,
		userPasswordInDB
	);
	if (!doPasswordsMatch) return reply.code(401).send("WP");

	delete userObjectFromDB.password;
	return reply.code(200).send(userObjectFromDB);
};

const SignupHandler = async (request, reply, fastify) => {
	const {
		username: enteredUsername,
		password: enteredPassword,
		confirmPassword: enteredConfirmPassword,
	} = request.body;

	if (enteredPassword !== enteredConfirmPassword)
		return reply.code(400).send("PAICDM");

	const hashedPassword = await bcrypt.hash(enteredPassword, 10);
	const signupQueryString =
		"INSERT INTO users (username,password,is_admin,product_id) VALUES ($1,$2,$3,$4)";
	await fastify.pg.query(signupQueryString, [
		enteredUsername,
		hashedPassword,
		false,
		null,
	]);
	return reply.code(200).send("SS");
};

module.exports = { LoginHandler, SignupHandler };
