const infosRouter = require("express").Router();
const { InfosController } = require("../controllers");

// GET
infosRouter.get("/", InfosController.getAll);
infosRouter.get("/:id", InfosController.getOneById);

// POST
infosRouter.post("/", InfosController.createOne, InfosController.getOneById);

// PUT
infosRouter.put("/:id", InfosController.updateOneById);

// DELETE
infosRouter.delete("/:id", InfosController.deleteOneById);

module.exports = infosRouter;
