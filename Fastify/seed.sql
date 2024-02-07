DROP TABLE products;

DROP TABLE tickets;

DROP TABLE users;

CREATE TABLE IF NOT EXISTS users(
	id SERIAL PRIMARY KEY,
	username VARCHAR(200) UNIQUE NOT NULL,
	password VARCHAR(2000),
	isAdmin BOOL,
	productId INT
);

CREATE TABLE IF NOT EXISTS products(
	id SERIAL PRIMARY KEY,
	title VARCHAR(200),
	description VARCHAR(2000),
	picture VARCHAR(10000),
	adminId INT,
	FOREIGN KEY (adminId) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS tickets(
	id SERIAL PRIMARY KEY,
	title VARCHAR(200),
	description VARCHAR(2000),
	deadline VARCHAR(100),
	created VARCHAR(100),
	submitterId INT,
	FOREIGN KEY (submitterId) REFERENCES users(id)
);