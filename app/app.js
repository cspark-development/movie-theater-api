const express = require("express");
const showsRouter = require("./routes/shows.js");
const usersRouter = require("./routes/users.js");
const app = require("./server.js");

app.use(express.json());
app.use(express.urlencoded());

app.bind("/users", usersRouter);
app.bind("/shows", showsRouter);
