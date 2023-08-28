import express from 'express';
import { AcademicDepartmentRoutes } from '../modules/AcademicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../modules/AcademicFaculty/academicFaculty.routes';
import { AcademicSemesterRoutes } from '../modules/AcademicSemester/academicSemester.routes';
import { BuildingServiceRoute } from '../modules/Building/building.routes';
import { facultyRoutes } from '../modules/Faculty/faculty.routes';
import { studentRoutes } from '../modules/Student/student.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/faculties',
    route: facultyRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/buildings',
    route: BuildingServiceRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
