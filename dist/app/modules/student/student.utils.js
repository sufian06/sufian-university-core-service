"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUtils = void 0;
const groupByAcademicSemester = (data) => {
    const groupData = data.reduce((result, course) => {
        const academicSemester = course.academicSemester;
        const academicSemesterId = academicSemester.id;
        const exitingGroup = result.find((group) => group.academicSemester.id === academicSemesterId);
        if (exitingGroup) {
            exitingGroup.completedCourses.push({
                id: course.id,
                createdAt: course.createdAt,
                updatedAt: course.updatedAt,
                courseId: course.courseId,
                studentId: course.studentId,
                grade: course.grade,
                point: course.point,
                totalMarks: course.totalMarks,
                course: course.course,
            });
        }
        else {
            result.push({
                academicSemester,
                completedCourses: [
                    {
                        id: course.id,
                        createdAt: course.createdAt,
                        updatedAt: course.updatedAt,
                        courseId: course.courseId,
                        studentId: course.studentId,
                        grade: course.grade,
                        point: course.point,
                        totalMarks: course.totalMarks,
                        course: course.course,
                    },
                ],
            });
        }
        return result;
    }, []);
    return groupData;
};
exports.StudentUtils = {
    groupByAcademicSemester,
};
