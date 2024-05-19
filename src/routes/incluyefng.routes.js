import {Router} from 'express'
import {createNewFormu, getFormulario, getFormularioById, deleteFormularioById, updateFormularioById} from '../controllers/incluyefng.controller'

const router2 = Router(); //INSTANCIANDO ROUTER.
router2.get('/formulario',getFormulario);
router2.post('/formulario',createNewFormu);
router2.get('/formulario/:iddoc',getFormularioById);
router2.delete('/formulario/:iddoc',deleteFormularioById);
router2.put('/formulario/:iddoc',updateFormularioById)

export default router2;