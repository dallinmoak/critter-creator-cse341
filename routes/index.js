import { Router } from "express";
import critterRoutes from "./critters.js";
import docsRoutes from "./docs.js";

const router = Router();

router.use("/critters", critterRoutes);
router.use("/docs", (req, res) => {
  // #swagger.ignore = true
  docsRoutes(req, res);
});

export default router;
