import mongoose from "mongoose";

const critterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  intelligence: {
    type: Number,
    required: true,
  },
  body_plan: {
    type: String,
    required: true,
  },
  color_code: {
    type: String,
    required: true,
  },
});

export default {
  critterSchema,
  Critter: mongoose.model("Critter", critterSchema),
};
