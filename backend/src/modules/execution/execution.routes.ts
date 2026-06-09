import { Router } from "express";

import {ExecutionController} from "./execution.controller";

const router = Router();

const controller = new ExecutionController();

router.post("/:id/execute", controller.run);
router.get("/", controller.getHistory);

export default router;