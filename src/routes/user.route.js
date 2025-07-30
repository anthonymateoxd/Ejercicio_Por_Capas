import { Router } from 'express';
import {
  deleteUsuario,
  getUsuario,
  getUsuarios,
  postUsuario,
  putUsuario,
} from '../controller/user.controller.js';

const router = Router();

router.get('/user', getUsuarios);
router.get('/user/:id_usuario', getUsuario);
router.post('/user', postUsuario);
router.put('/user/:id_usuario', putUsuario);
router.delete('/user/:id_usuario', deleteUsuario);

export default router;
