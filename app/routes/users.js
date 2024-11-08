const User = require("../../models/User.js");
/* const { Op } = require("sequelize"); */
const express = require("express");
const usersRouter = express.Router();

usersRouter.get("/", async (request, response) => {
	response.json(await User.findAll());
});

usersRouter.get("/:userid", async (request, response) => {
	response.json(await User.findByPk(request.params.userid));
});

usersRouter.get("/:userid/shows", async (request, response) => {
	const targetUser = await User.findByPk(request.params.userid);
	response.json(await targetUser.getWatched());
});

usersRouter.put("/:userid/shows/:showid", async (request, response) => {
	const targetUser = await User.findByPk(request.params.userid);
	response.json (await targetUser.createWatched({
		userId: request.params.userid,
		showId: request.params.showid
	}));
});

module.exports = usersRouter;
