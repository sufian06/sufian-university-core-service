"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const academicDepartment_routes_1 = require("../modules/academicDepartment/academicDepartment.routes");
const academicFaculty_routes_1 = require("../modules/academicFaculty/academicFaculty.routes");
const academicSemester_routes_1 = require("../modules/academicSemester/academicSemester.routes");
const building_routes_1 = require("../modules/building/building.routes");
const course_routes_1 = require("../modules/course/course.routes");
const faculty_routes_1 = require("../modules/faculty/faculty.routes");
const offeredCourse_routes_1 = require("../modules/offeredCourse/offeredCourse.routes");
const offeredCourseClassSchedule_routes_1 = require("../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes");
const offeredCourseSection_routes_1 = require("../modules/offeredCourseSection/offeredCourseSection.routes");
const room_routes_1 = require("../modules/room/room.routes");
const semesterRegistration_routes_1 = require("../modules/semesterRegistration/semesterRegistration.routes");
const student_routes_1 = require("../modules/student/student.routes");
const studentEnrolledCourseMark_routes_1 = require("../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes");
const studentEnrolledCourse_routes_1 = require("../modules/studentEnrolledCourse/studentEnrolledCourse.routes");
const studentSemesterPayment_routes_1 = require("../modules/studentSemesterPayment/studentSemesterPayment.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/academic-departments',
        route: academicDepartment_routes_1.AcademicDepartmentRoutes,
    },
    {
        path: '/academic-semesters',
        route: academicSemester_routes_1.AcademicSemesterRoutes,
    },
    {
        path: '/academic-faculties',
        route: academicFaculty_routes_1.AcademicFacultyRoutes,
    },
    {
        path: '/faculties',
        route: faculty_routes_1.FacultyRoutes,
    },
    {
        path: '/students',
        route: student_routes_1.StudentRoutes,
    },
    {
        path: '/buildings',
        route: building_routes_1.BuildingRoutes,
    },
    {
        path: '/rooms',
        route: room_routes_1.RoomRoutes,
    },
    {
        path: '/courses',
        route: course_routes_1.CourseRoutes,
    },
    {
        path: '/semester-registrations',
        route: semesterRegistration_routes_1.SemesterRegistrationRoutes,
    },
    {
        path: '/offered-courses',
        route: offeredCourse_routes_1.OfferedCourseRoutes,
    },
    {
        path: '/offered-course-sections',
        route: offeredCourseSection_routes_1.OfferedCourseSectionRoutes,
    },
    {
        path: '/offered-course-class-schedules',
        route: offeredCourseClassSchedule_routes_1.OfferedCourseClassScheduleRoutes,
    },
    {
        path: '/student-enrolled-courses',
        route: studentEnrolledCourse_routes_1.StudentEnrolledCourseRoutes,
    },
    {
        path: '/student-enrolled-course-marks',
        route: studentEnrolledCourseMark_routes_1.StudentEnrolledCourseMarkRoutes,
    },
    {
        path: '/student-semester-payments',
        route: studentSemesterPayment_routes_1.StudentSemesterPaymentRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
