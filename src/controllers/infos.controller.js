const { Infos } = require("../models");

const getAll = async (req, res) => {
  try {
    const [results] = await Infos.findAll();
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [[result]] = await Infos.findOneById(id);
    if (!result) return res.status(404).send();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createOne = async (req, res) => {
  try {
    const [result] = await Infos.createOne(req.info);
    const [[infos]] = await Infos.findOneById(result.insertId);
    res.status(201).send(infos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    await Infos.updateOneById(req.info, id);
    const [[infos]] = await Infos.findOneById(id);
    res.status(200).send(infos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await Infos.findOneById(id);
    if (!result) return res.status(404).send("Info not found");
    await Infos.deleteOneById(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getAll, getOneById, createOne, updateOneById, deleteOneById };
