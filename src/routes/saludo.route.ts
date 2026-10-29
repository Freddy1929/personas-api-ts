import { Router } from 'express';
import * as controller from '../controllers/saludo.controller';

const router = Router();

router.get('/', controller.saludar);
router.get('/v2', controller.saludarUsandoNombreEnQueryParameter);
router.get('/v3/:nombre', controller.saludarUsandoNombreEnUrl);

export default router;