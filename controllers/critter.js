import critterModel from "../models/critter.js";
const Critter = critterModel.Critter;
const critterSchema = critterModel.critterSchema;

const checkForExtraProps = (input) => {
  let output = false;
  Object.keys(input).forEach((key) => {
    if (!critterSchema.obj[key]) {
      output = { message: `Property '${key}' not allowed` };
    }
  });
  return output;
};

const send404 = (res, message) => {
  return res.status(404).json({ message });
};

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
    if (!critter) send404(res, `route critters${req.path} not found`);
    res.status(200).json(critter);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
};

const createCritter = async (req, res) => {
  const extraProps = checkForExtraProps(req.body);
  if (extraProps) {
    return res.status(400).json(extraProps);
  }
  try {
    const critter = await Critter.create(req.body);
    res.status(201).json(critter);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
};

const updateById = async (req, res) => {
  const extraProps = checkForExtraProps(req.body);
  if (extraProps) {
    return res.status(400).json(extraProps);
  }
  try {
    const critter = await Critter.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!critter) send404(res, `route critters${req.path} not found`);
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
    if (!deletedCritter) send404(res, `route critters${req.path} not found`);
    res.status(200).json(deletedCritter);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
};

export default {
  getAll,
  getById,
  createCritter,
  updateById,
  deleteById,
};
