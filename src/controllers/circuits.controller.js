/* eslint-disable consistent-return */
const { Circuits } = require("../models");

// recherche de tous les circuits
const getAll = async (req, res) => {
  try {
    const [results] = await Circuits.findAll();
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// recherche du circuit par l'Id
const getOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [[result]] = await Circuits.findOneById(id);
    if (!result) return res.status(404).send();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// création d'un nouveau calendrier
const createOne = async (req, res) => {
  try {
    const [result] = await Circuits.createOne(req.circuit);
    const [[circuit]] = await Circuits.findOneById(result.insertId);
    res.status(201).send(circuit);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// mise à jour d(un nouveau circuit)
const updateOneById = async (req, res) => {
  const { id } = req.params;
  // j'indique les données que je veux récupérer dans le body
  const { name, time, address, circuit_link, assets_circuit } = req.body;

  if (!name && !time && !address && !circuit_link && !assets_circuit) {
    res.status(400).send(`Datas invalid`);
    // si j'ai une valeur, alors
  } else {
    // je créé un objet temporaire pour stocker les données de mise à jour
    const circuitToUpdate = {};

    if (name) {
      circuitToUpdate.name = name;
    }
    if (time) {
      circuitToUpdate.time = time;
    }
    if (address) {
      circuitToUpdate.address = address;
    }
    if (circuit_link) {
      circuitToUpdate.circuit_link = circuit_link;
    }
    if (assets_circuit) {
      circuitToUpdate.assets_circuit = assets_circuit;
    }
    try {
      const [result] = await Circuits.updateOne(circuitToUpdate, id);
      console.log(result);

      if (result.affectedRows === 0) {
        res.status(404).send(`Circuit with id ${id} not found`);
      } else {
        res.status(200).send(`Update OK`);
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
};

// suppression d'un circuit
const deleteOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await Circuits.deleteOneById(id);
    if (result.affectedRows === 0) {
      res.status(404).send(`Circuit with id ${id} not found`);
    } else {
      res.status(204).send(`Circuit deleted`);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAll,
  getOneById,
  createOne,
  updateOneById,
  deleteOneById,
};
