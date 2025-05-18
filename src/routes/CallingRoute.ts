import { Router } from 'express';
import { CallingController } from '../controllers/CallingController';
import { CallingCreateValidation,CallingUpdateValidation } from '../validations/CallingValidation';
import { ValidateResult } from '../middleware/ValidateResult';

const router = Router();

router.post(
  '/',
  CallingCreateValidation,
  ValidateResult,
  CallingController.create
);
router.put(
  '/:id',
  CallingUpdateValidation,
  ValidateResult,
  CallingController.update
);
router.get(
  '/',
  CallingController.findAll
);
router.get(
  '/:id',
  CallingController.findById
);

export default router;
