const { Rules } = require("../models");

const getAll = async (req, res) => {
  try {
    const [results] = await Rules.findAll();
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [[result]] = await Rules.getOneById(id);
    if (!result) return res.status(404).send();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const [result] = await Rules.createOne(req.rule);
    const [[rules]] = await Rules.findOneById(result.insertId);
    res.status(201).send(rules);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await Rules.findOneById(id);
    if (!result) return res.status(404).send("Rules not found");
    await Rules.deleteOneById(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getAll, getOneById, createOne, deleteOneById };
