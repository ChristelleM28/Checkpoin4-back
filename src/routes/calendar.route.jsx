const calendarRouter = require("express").Router();
const { CalendarController } = require("../controllers");

// GET
calendarRouter.get("/", CalendarController.getAll);
calendarRouter.get("/:id", CalendarController.getOneById);

// POST
calendarRouter.post("/", CalendarController.createOne, CalendarController.getOneById);

// PUT
calendarRouter.put("/:id", CalendarController.updateOneById);

// DELETE
calendarRouter.delete("/:id", CalendarController.deleteOneById);

module.exports = calendarRouter;
