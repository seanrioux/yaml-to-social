"use strict";

const fs = require("fs");
const puppeteer = require("puppeteer");

const { config } = require("../../src/config");

const renderSet = async (key, width, height) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto(`${config.appUrl}/${key}?width=${width}&height=${height}`);

	const elements = await page.$$("article");

	for (let i = 0; i < elements.length; i++) {
		try {
			// get screenshot of a particular element
			await elements[i].screenshot({
				path: `${config.buildFolder}/${key}-${i}-${width}x${height}.png`,
			});
		} catch (e) {
			console.log(
				`couldnt take screenshot of element with index: ${i}. cause: `,
				e
			);
		}
	}

	await browser.close();
};

module.exports = async function (fastify, opts) {
	fastify.get("/render", async function (request, reply) {
		renderSet(request.query.key, request.query.width, request.query.height);
		return "success";
	});
};
