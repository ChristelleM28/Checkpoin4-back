const usersRouter = require("express").Router();
const { UsersController } = require("../controllers");

// GET
usersRouter.get("/", UsersController.getAll);
usersRouter.get("/:id", UsersController.getOneById);

// POST
usersRouter.post("/", UsersController.createOne, UsersController.getOneById);

// PUT
// usersRouter.put("/:id", UsersController.updateOneById);

// DELETE
usersRouter.delete("/:id", UsersController.deleteOneById);

module.exports = usersRouter;
