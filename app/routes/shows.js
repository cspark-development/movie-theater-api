const { Op } = require("sequelize");
const Show = require("../../models/Show.js");
/* const { Op } = require("sequelize"); */
const express = require("express");
const showsRouter = express.Router();

showsRouter.get("/", async (request, response) => {
	response.json(await Show.findAll());
});

showsRouter.get("/:userid", async (request, response) => {
	response.json(await Show.findByPk(request.params.userid));
});

showsRouter.get("/:showid/shows", async (request, response) => {
	const targetShow = await Show.findByPk(request.params.showid);
	response.json(await targetShow.getUsers());
});

showsRouter.put("/:showid/:available", async (request, response) => {
	const targetShow = await Show.findByPk(request.params.showid);
	response.json(await targetShow.update({
		available: request.params.available === "true" ? true : false
	}));
});

showsRouter.delete("/:showid", async (request, response) => {
	const targetShow = await Show.findByPk(request.params.showid);
	response.json(targetShow.destroy());
});

showsRouter.get("/genre/:genre", async (request, response) => {
	response.json(await Show.findAll({
		where: {
			genre: {
				[Op.eq]: request.params.genre,
			}
		}
	}));
});

module.exports = showsRouter;
