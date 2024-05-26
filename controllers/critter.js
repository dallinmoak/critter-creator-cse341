import Critter from "../models/critter.js";

const getAll = async (req, res) => {
  try {
    const critters = await Critter.find();
    res.status(200).json(critters);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
};

const getById = async (req, res) => {
  try {
    const critter = await Critter.findById(req.params.id);
    res.status(200).json(critter);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
};

const createById = async (req, res) => {
  try {
    const critter = await Critter.create(req.body);
    res.status(201).json(critter);
  } catch (e) {
    res.status(500).json(ereror);
    console.log(e);
  }
};

const updateById = async (req, res) => {
  try {
    const critter = await Critter.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(critter);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
};

const deleteById = async (req, res) => {
  try {
    const deletedCritter = await Critter.findByIdAndDelete(
      req.params.id
    ).exec();
    res.status(200).json(deletedCritter);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
};

export default { getAll, getById, createById, updateById, deleteById };
