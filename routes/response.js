import { Router } from "express";
const router = Router();

import { add, get } from "../controllers/response.js";

router.post("/", add);
router.get("/:id", add);

export default router;
