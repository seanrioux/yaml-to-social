"use strict";

const YAML = require("yaml");
const fs = require("fs");

module.exports = async function (fastify, opts) {
	fastify.get("/posts", async function (request, reply) {
		const postsFile = fs.readFileSync(
			"../posts/" + request.query.name + ".yml",
			"utf8"
		);

		const posts = YAML.parse(postsFile);

		return posts;
	});
};
