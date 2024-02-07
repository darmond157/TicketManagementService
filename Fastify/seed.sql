DROP TABLE products;

DROP TABLE tickets;

DROP TABLE users;

CREATE TABLE IF NOT EXISTS users(
	id SERIAL PRIMARY KEY,
	username VARCHAR(200) UNIQUE NOT NULL,
	password VARCHAR(2000),
	is_admin BOOL,
	product_id INT,
	created_at VARCHAR(100),
	deleted_at VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS products(
	id SERIAL PRIMARY KEY,
	title VARCHAR(200),
	description VARCHAR(2000),
	picture VARCHAR(10000),
	admin_id INT,
	created_at VARCHAR(100),
	deleted_at VARCHAR(100),
	FOREIGN KEY (admin_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS tickets(
	id SERIAL PRIMARY KEY,
	title VARCHAR(200),
	description VARCHAR(2000),
	deadline VARCHAR(100),
	created_at VARCHAR(100),
	deleted_at VARCHAR(100),
	submitter_id INT,
	FOREIGN KEY (submitter_id) REFERENCES users(id)
);

INSERT INTO
	users (username, password, is_admin, product_id)
VALUES
	('A', 'B', false, NULL)