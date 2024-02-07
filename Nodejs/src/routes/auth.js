const { LoginHandler, SignupHandler } = require("../controllers/auth");

module.exports = (fastify) => {
	fastify.post("/auth/login", async (request, reply) => {
		try {
			await LoginHandler(request, reply, fastify);
		} catch (error) {
			console.error(error);
			reply.code(500).send({ message: "Internal Server Error ..." });
		}
	});
	fastify.post("/auth/signup", async (request, reply) => {
		try {
			await SignupHandler(request, reply, fastify);
		} catch (error) {
			console.error(error);
			reply.code(500).send({ message: "Internal Server Error ..." });
		}
	});
};
