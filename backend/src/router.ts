import {Router} from 'express';
import { fetchPerguntas } from './handlers/pergunta';
import { errorBoundary } from './modules/errorBoundary';

const router = Router();

router.get("/:stack/:quantity", async (req, res, next) => {
   fetchPerguntas(req, res, next); 
})

router.use(errorBoundary);

export default router