"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offeredCourseClassScheduleFilterableFields = exports.offeredCourseClassScheduleRelationalFieldsMapper = exports.offeredCourseClassScheduleRelationalFields = exports.offeredCourseClassScheduleSearchableFields = void 0;
exports.offeredCourseClassScheduleSearchableFields = ['dayOfWeek'];
exports.offeredCourseClassScheduleRelationalFields = [
    'offeredCourseSectionId',
    'semesterRegistrationId',
    'facultyId',
    'roomId',
];
exports.offeredCourseClassScheduleRelationalFieldsMapper = {
    offeredCourseSectionId: 'offeredCourseSection',
    semesterRegistrationId: 'semesterRegistration',
    facultyId: 'faculty',
    roomId: 'room',
};
exports.offeredCourseClassScheduleFilterableFields = [
    'searchTerm',
    'dayOfWeek',
    'offeredCourseSectionId',
    'semesterRegistrationId',
    'facultyId',
    'roomId',
];
