"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentEnrolledCourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const studentEnrolledCourse_controller_1 = require("./studentEnrolledCourse.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const studentEnrolledCourse_validations_1 = require("./studentEnrolledCourse.validations");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.get('/', studentEnrolledCourse_controller_1.StudentEnrolledCourseController.getAllFromDB);
router.get('/:id', studentEnrolledCourse_controller_1.StudentEnrolledCourseController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(studentEnrolledCourse_validations_1.StudentEnrolledCourseValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), studentEnrolledCourse_controller_1.StudentEnrolledCourseController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(studentEnrolledCourse_validations_1.StudentEnrolledCourseValidation.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), studentEnrolledCourse_controller_1.StudentEnrolledCourseController.updateOneInDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), studentEnrolledCourse_controller_1.StudentEnrolledCourseController.deleteByIdFromDB);
exports.StudentEnrolledCourseRoutes = router;
