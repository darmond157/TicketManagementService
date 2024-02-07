const addNewProduct = async (request, reply, fastify) => {
	const { title, description, picture, admin_id } = request.body;
	if (!title || !admin_id) return reply.code(400).send({ message: "EF" });
	const date = new Date().toISOString();
	const addNewProductQueryString =
		"INSERT INTO products (title,description,picture,admin_id,created_at) VALUES ($1,$2,$3,$4)";
	await fastify.pg.query(addNewProductQueryString, [
		title,
		description,
		picture,
		admin_id,
		date,
	]);
	return reply.code(200).send({ message: "PAS" });
};

const viewProduct = async (request, reply, fastify) => {
	const productId = request.params.id;
	const viewProductQueryString = "SELECT * FROM products WHERE id=$1";
	const viewProductQueryResult = await fastify.pg.query(
		viewProductQueryString,
		[productId]
	);
	return reply.code(200).send({ message: viewProductQueryResult.rows[0] });
};

const editProduct = async (request, reply, fastify) => {
	const { description, picture } = request.body;
	description = !!description ? description : "";
	picture = !!picture ? picture : "";
	const editProductQueryString =
		"UPDATE products SET description=$1, picture=$2 WHERE id=$3";
	await fastify.pg.query(editProductQueryString, [
		description,
		picture,
		productId,
	]);
	return reply.code(200).send({ message: "PES" });
};

module.exports = { addNewProduct, viewProduct, editProduct };
