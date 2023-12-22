import { Router } from "express";

import * as ApiController from "../controllers/apiController";

const router = Router();

router.get("/participants", ApiController.listParticipants);
router.post("/participants", ApiController.createParticipant);
router.put("/participants/:id", ApiController.updateParticipant);
router.delete("/participants/:id", ApiController.deleteParticipant);

export default router;