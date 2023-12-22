import { Router } from 'express';
import * as ApiController from '../controllers/apiControllers';

const router = Router();

router.get("/participants", ApiController.listParticpants);

export default router;