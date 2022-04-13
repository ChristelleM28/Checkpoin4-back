const mainRouter = require("express").Router();

const usersRouter = require("./users.routes");
const rulesRouter = require("./rules.routes");
const infosRouter = require("./infos.routes");
const circuitsRouter = require("./circuits.routes");
const calendarRouter = require("./calendar.routes");

mainRouter.use("/users", usersRouter);
mainRouter.use("/rules", rulesRouter);
mainRouter.use("/infos", infosRouter);
mainRouter.use("/circuits", circuitsRouter);
mainRouter.use("/calendar", calendarRouter);

module.exports = mainRouter;
