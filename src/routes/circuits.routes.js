const circuitsRouter = require("express").Router();
const { CircuitsController } = require("../controllers");

// GET
circuitsRouter.get("/", CircuitsController.getAll);
circuitsRouter.get("/:id", CircuitsController.getOneById);

// POST
circuitsRouter.post("/", CircuitsController.createOne, CircuitsController.getOneById);

// PUT
circuitsRouter.put("/:id", CircuitsController.updateOneById);

// DELETE
circuitsRouter.delete("/:id", CircuitsController.deleteOneById);

module.exports = circuitsRouter;
