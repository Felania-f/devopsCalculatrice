import { Router } from 'express';
import { CalculatorController } from '../controllers/calculator.controller';

const router = Router();
const calculatorController = new CalculatorController();

router.get('/add', calculatorController.add);
router.get('/subtract', calculatorController.subtract);
router.get('/multiply', calculatorController.multiply);
router.get('/divide', calculatorController.divide);

export default router;