const rulesRouter = require("express").Router();
const { RulesController } = require("../controllers");

// GET
rulesRouter.get("/", RulesController.getAll);
rulesRouter.get("/:id", RulesController.getOneById);

// POST
rulesRouter.post("/", RulesController.createOne, RulesController.getOneById);

// DELETE
rulesRouter.delete("/:id", RulesController.deleteOneById);

module.exports = rulesRouter;
