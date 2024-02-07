const { EditUser } = require("../controllers/user");

module.exports = (fastify) => {
	fastify.put("/user", async (request, reply) => {
		try {
			await EditUser(request, reply, fastify);
		} catch (error) {
			console.error(error);
			reply.code(500).send({ message: "Internal Server Error ..." });
		}
	});
};
