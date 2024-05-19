import { Router } from 'express';
import { getDepartamentos } from '../controllers/departamentos.controller';

const router1 = Router();
router1.get("/departamentos",getDepartamentos); //RUTA PARA CONSULTAR LOS DEPARTAMENTOS


export default router1