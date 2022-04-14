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
  const { title, description, date } = req.body;
  if (!title || !description || !date) {
    res.status(400).send(`You must provide all mandatories datas`);
  } else {
    try {
      const [result] = await Infos.createOne({
        title,
        description,
        date,
      });
      const [[info]] = await Infos.findOneById(result.insertId);
      res.status(200).send(info);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
};

// const updateOneById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const [result] = await Infos.updateOne(req.info, id);
//     const [[infos]] = await Infos.findOneById(id);
//     res.status(200).send(infos);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

const updateOneById = async (req, res) => {
  const { id } = req.params;
  const { title, description, date } = req.body;
  if (!title && !description && !date) {
    res.status(400).send(`Datas invalid`);
  } else {
    req.infos = { title, description, date };

    try {
      const [result] = await Infos.updateOne(req.infos, id);
      if (result.affectedRows === 0) {
        res.status(404).send(`infos with id ${id} not found`);
      } else {
        res.status(200).send(`Update OK`);
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
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
