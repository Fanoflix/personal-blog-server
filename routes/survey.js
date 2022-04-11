import { Router } from "express";
const router = Router();

import { create, get } from "../controllers/survey.js";

router.post("/", create);
router.get("/:id", get);

export default router;
