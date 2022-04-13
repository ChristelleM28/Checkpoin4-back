const rulesRouter = require("express").Router();
const { RulesController } = require("../controllers");

// GET
rulesRouter.get("/", RulesController.getAll);
rulesRouter.get("/:id", RulesController.getOneById);

// POST
rulesRouter.post("/", RulesController.createOne, RulesController.getOneById);

// PUT
rulesRouter.put("/:id", RulesController.updateOneById);

// DELETE
rulesRouter.delete("/:id", RulesController.deleteOneById);

module.exports = rulesRouter;
