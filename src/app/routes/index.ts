import express from 'express';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { BuildingRoutes } from '../modules/building/building.routes';
import { CourseRoutes } from '../modules/course/course.routes';
import { FacultyRoutes } from '../modules/faculty/faculty.routes';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offeredCourse.routes';
import { OfferedCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';
import { OfferedCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.routes';
import { RoomRoutes } from '../modules/room/room.routes';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { StudentRoutes } from '../modules/student/student.routes';
import { StudentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes';
import { StudentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.routes';
import { StudentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },

  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/buildings',
    route: BuildingRoutes,
  },
  {
    path: '/rooms',
    route: RoomRoutes,
  },
  {
    path: '/courses',
    route: CourseRoutes,
  },
  {
    path: '/semester-registrations',
    route: SemesterRegistrationRoutes,
  },
  {
    path: '/offered-courses',
    route: OfferedCourseRoutes,
  },
  {
    path: '/offered-course-sections',
    route: OfferedCourseSectionRoutes,
  },
  {
    path: '/offered-course-class-schedules',
    route: OfferedCourseClassScheduleRoutes,
  },
  {
    path: '/student-enrolled-courses',
    route: StudentEnrolledCourseRoutes,
  },
  {
    path: '/student-enrolled-course-marks',
    route: StudentEnrolledCourseMarkRoutes,
  },
  {
    path: '/student-semester-payments',
    route: StudentSemesterPaymentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
