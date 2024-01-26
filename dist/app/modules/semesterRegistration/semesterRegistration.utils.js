"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterRegistrationUtils = void 0;
const getAvailableCourses = (offeredCourses, studentCompletedCourses, studentCurrentlyTakenCourses) => {
    const completedCourseId = studentCompletedCourses.map((course) => course.courseId);
    const availableCoursesList = offeredCourses
        .filter((offeredCourse) => !completedCourseId.includes(offeredCourse.courseId))
        .filter((course) => {
        const preRequisites = course.course.preRequisite;
        if (preRequisites.length === 0) {
            return true;
        }
        else {
            const preRequisiteIds = preRequisites.map((preRequisite) => preRequisite.preRequisiteId);
            return preRequisiteIds.every((id) => completedCourseId.includes(id));
        }
    })
        .map((course) => {
        const isAlreadyTakenCourse = studentCurrentlyTakenCourses.find((c) => c.offeredCourseId === course.id);
        if (isAlreadyTakenCourse) {
            course.offeredCourseSections.map((section) => {
                if (section.id === isAlreadyTakenCourse.offeredCourseSectionId) {
                    section.isTaken = true;
                }
                else {
                    section.isTaken = false;
                }
            });
            return Object.assign(Object.assign({}, course), { isTaken: true });
        }
        else {
            course.offeredCourseSections.map((section) => {
                section.isTaken = false;
            });
            return Object.assign(Object.assign({}, course), { isTaken: false });
        }
    });
    return availableCoursesList;
};
exports.SemesterRegistrationUtils = {
    getAvailableCourses,
};
