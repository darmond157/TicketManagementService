const bcrypt = require("bcrypt");

module.exports = (fastify) => {
	fastify.post("/auth/login", async (request, reply) => {
		const { username, password } = request.body;

		const loginQueryString = "SELECT * FROM users WHERE username=$1";
		const loginQueryResult = await fastify.pg.query(loginQueryString, [
			username,
		]);

		if (!loginQueryResult.rows.length) return reply.code(401).send("UNE");

		const userObject = loginQueryResult.rows[0];
		const userPassword = userObject.password;
		const passwordMatchResult = await bcrypt.compare(password, userPassword);
		if (!passwordMatchResult) return reply.code(401).send("WP");

		return reply.code(200).send(userObject);
	});
	fastify.post("/auth/signup", async (request, reply) => {
		const { username, password, confirmPassword } = request.body;

		if (password !== confirmPassword) return reply.code(401).send("PAICDM");

		const hashedPassword = await bcrypt.hash(password, 10);
		const signupQueryString =
			"INSERT INTO users (username,password,isAdmin,productId) VALUES ($1,$2,$3,$4)";
		await fastify.pg.query(signupQueryString, [
			username,
			hashedPassword,
			false,
			null,
		]);
		return reply.code(200).send("SS");
	});
};
