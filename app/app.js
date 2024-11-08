const showsRouter = require("./routes/shows.js");
const usersRouter = require("./routes/users.js");
const app = require("./server.js");

app.bind("/users", usersRouter);
app.bind("/shows", showsRouter);
