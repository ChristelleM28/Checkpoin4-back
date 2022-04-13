const { Calendar } = require("../models");

// recherche de tous les calendriers
const getAll = async (req, res) => {
  try {
    const [results] = await Calendar.findAll();
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// recherche du calendrier par l'Id
const getOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [[result]] = await Calendar.findOneById(id);
    if (!result) return res.status(404).send();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// création d'un nouveau calendrier
 const createOne = async (req, res) => {
  try {
    const [result] = await Calendar.createOne(req.book);
    const [[calendar]] = await Calendar.findOneById(result.insertId);
    res.status(201).send(calendar);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


// suppression d'un  calendrier
const deleteOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await Calendar.deleteOneById(id);
    if (result.affectedRows === 0) {
      res.status(404).send(`Calendar with id ${id} not found`);
    } else {
      res.status(204).send(`Calendar deleted`);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAll,
  getOneById,
  createOne,
  deleteOneById,
};
