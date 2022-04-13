const { Users } = require("../models");

// Méthode qui permet de récupérer tous les utilisateurs
const getAll = async (req, res) => {
  try {
    const [results] = await Users.findAll();
    return res.json(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// Méthode qui permet de recuperer un utilisateur par son ID
const getOneById = async (req, res) => {
  const statusCode = req.method === "POST" ? 201 : 200;
  const id = req.params.id ? req.params.id : req.id;

  try {
    const [[results]] = await Users.findOneById(id);
    if (!results) return res.status(404).send(`User id ${id} not found`);
    return res.status(statusCode).json(results[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Méthode qui permet de supprimer un utilisateur par son ID
const deleteOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await Users.deleteOneById(id);
    if (result.affectedRows === 0) {
      res.status(404).send(`User with id ${id} not found`);
    } else {
      res.status(204).send(`User deleted`);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getAll, getOneById, deleteOneById };
