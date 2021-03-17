"use strict";

const fs = require("fs");

const path = "../posts/";

module.exports = async function (fastify, opts) {
	fastify.get("/sets", async function (request, reply) {
		const files = fs.readdirSync(path).map((file) => {
			const name = file.split(".").shift();
			const type = file.split(".").pop();

			return { name, type, file };
		});

		return files;
	});
};
