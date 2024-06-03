import { Router } from "express";
import critterController from "../controllers/critter.js";

const router = Router();

router.get("/", (req, res) => {
  /* #swagger.description = 'Get all critters'
  #swagger.responses[200] = {
    description: "a list of all critters",
    schema: { $ref: "#/definitions/Critters" }
  }
  */
  critterController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  /* #swagger.description = 'Get a critter by id'
  #swagger.parameters['id'] = { description: 'Critter id' }
  #swagger.responses[200] = {
    description: "a critter",
    schema: { $ref: "#/definitions/Critter" }
  }
  */
  critterController.getById(req, res);
});

router.post("/", (req, res) => {
  /* #swagger.description = 'Create a critter'
  #swagger.parameters['newCritter'] = { 
    in: 'body',
    description: 'New critter',
    required: true,
    schema: { $ref: "#/definitions/Critter" }
  }
  #swagger.responses[201] = {
    description: "Critter created",
    schema: { $ref: "#/definitions/Critter" }
  }
  */
  critterController.createCritter(req, res);
});

router.put("/:id", (req, res) => {
  /* #swagger.description = 'Update a critter by id'
  #swagger.parameters['id'] = { description: 'Critter id' }
  #swagger.parameters['updatedCritter'] = { 
    in: 'body',
    description: 'Updated critter',
    required: true,
    schema: { $ref: "#/definitions/Critter" }
  }
  #swagger.responses[200] = {
    description: "Critter updated",
    schema: { $ref: "#/definitions/Critter" }
  }
  */
  critterController.updateById(req, res);
});

router.delete("/:id", (req, res) => {
  /* #swagger.description = 'Delete a critter by id'
  #swagger.parameters['id'] = { description: 'Critter id' }
  #swagger.responses[200] = {
    description: "Critter deleted",
    schema: { $ref: "#/definitions/Critter" }
  }
  */
  critterController.deleteById(req, res);
});

export default router;
