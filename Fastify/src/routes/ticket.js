const { LoginHandler, SignupHandler } = require("../controllers/auth");

module.exports = (fastify) => {
	fastify.post("/ticket/submit", async (request, reply) => {
		try {
			await LoginHandler(request, reply, fastify);
		} catch (error) {
			console.error(error);
			reply.code(500).send({ message: "Internal Server Error ..." });
		}
	});
	fastify.put("/ticket/edit", async (request, reply) => {
		try {
			await SignupHandler(request, reply, fastify);
		} catch (error) {
			console.error(error);
			reply.code(500).send({ message: "Internal Server Error ..." });
		}
	});
    fastify.delete("/ticket/remove", async (request, reply) => {
		try {
			await SignupHandler(request, reply, fastify);
		} catch (error) {
			console.error(error);
			reply.code(500).send({ message: "Internal Server Error ..." });
		}
	});
    fastify.get("/ticket/:id", async (request, reply) => {
		try {
			await SignupHandler(request, reply, fastify);
		} catch (error) {
			console.error(error);
			reply.code(500).send({ message: "Internal Server Error ..." });
		}
	});
};
