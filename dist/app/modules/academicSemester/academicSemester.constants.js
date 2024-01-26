"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_ACADEMIC_SEMESTER_DELETED = exports.EVENT_ACADEMIC_SEMESTER_UPDATED = exports.EVENT_ACADEMIC_SEMESTER_CREATED = exports.academicSemesterTitleCodeMapper = exports.AcademicSemesterFilterableFields = exports.AcademicSemesterSearchableFields = void 0;
exports.AcademicSemesterSearchableFields = [
    'title',
    'code',
    'startMonth',
    'endMonth',
];
exports.AcademicSemesterFilterableFields = [
    'searchTerm',
    'code',
    'startMonth',
    'endMonth',
];
exports.academicSemesterTitleCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
};
exports.EVENT_ACADEMIC_SEMESTER_CREATED = 'academic-semester.created';
exports.EVENT_ACADEMIC_SEMESTER_UPDATED = 'academic-semester.updated';
exports.EVENT_ACADEMIC_SEMESTER_DELETED = 'academic-semester.deleted';
