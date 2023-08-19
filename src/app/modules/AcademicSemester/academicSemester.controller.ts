import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';

const insertToDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.insertToDB(req.body);

  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created successfully!',
    data: result,
  });
});

export const AcademicSemesterController = {
  insertToDB,
};
