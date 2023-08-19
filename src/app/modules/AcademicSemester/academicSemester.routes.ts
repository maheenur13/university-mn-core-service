import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { academicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(academicSemesterValidation.create),
  AcademicSemesterController.insertToDB
);

export const AcademicSemesterRoutes = router;
