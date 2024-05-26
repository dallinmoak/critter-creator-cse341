import { Router } from "express";
import { createRequire } from "module";
import * as swaggerUi from "swagger-ui-express";

const router = Router();

const require = createRequire(import.meta.url);
const swaggerFile = require("../swagger.json");

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerFile));

export default router;
