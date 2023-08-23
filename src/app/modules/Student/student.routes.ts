import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validation';

const router = express.Router();

router.get('/', StudentController.getAllFromDB);

router.post(
  '/',
  validateRequest(StudentValidation.create),
  StudentController.insertIntoDB
);
router.patch(
  '/:id',
  validateRequest(StudentValidation.update),
  StudentController.updateStudent
);
router.get('/:id', StudentController.getByIdFromDB);

export const studentRoutes = router;
