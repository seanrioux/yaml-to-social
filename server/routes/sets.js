"use strict";

const fs = require("fs");

const path = "../posts/";

module.exports = async function (fastify, opts) {
	fastify.get("/", async function (request, reply) {
		const files = fs.readdirSync(path).map((file) => {
			const key = file.split(".").shift();
			const type = file.split(".").pop();

			return { key, type, file };
		});

		return files;
	});
};
