const {
	addNewProduct,
	viewProduct,
	editProduct,
	deleteProduct,
} = require("../controllers/product");

module.exports = (fastify) => {
	fastify.post("/product/new", async (request, reply) => {
		try {
			await addNewProduct(request, reply, fastify);
		} catch (error) {
			console.error(error);
			reply.code(500).send({ message: "Internal Server Error ..." });
		}
	});
	fastify.get("/product/:id", async (request, reply) => {
		try {
			await viewProduct(request, reply, fastify);
		} catch (error) {
			console.error(error);
			reply.code(500).send({ message: "Internal Server Error ..." });
		}
	});
	fastify.put("/product/edit", async (request, reply) => {
		try {
			await editProduct(request, reply, fastify);
		} catch (error) {
			console.error(error);
			reply.code(500).send({ message: "Internal Server Error ..." });
		}
	});
	fastify.delete("/product/delete", async (request, reply) => {
		try {
			await deleteProduct(request, reply, fastify);
		} catch (error) {
			console.error(error);
			reply.code(500).send({ message: "Internal Server Error ..." });
		}
	});
};
