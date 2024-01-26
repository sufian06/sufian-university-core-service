"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const offeredCourse_controller_1 = require("./offeredCourse.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const offeredCourse_validations_1 = require("./offeredCourse.validations");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.get('/', offeredCourse_controller_1.OfferedCourseController.getAllFromDB);
router.get('/:id', offeredCourse_controller_1.OfferedCourseController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(offeredCourse_validations_1.OfferedCourseValidations.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), offeredCourse_controller_1.OfferedCourseController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(offeredCourse_validations_1.OfferedCourseValidations.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), offeredCourse_controller_1.OfferedCourseController.updateOneInDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), offeredCourse_controller_1.OfferedCourseController.deleteByIdFromDB);
exports.OfferedCourseRoutes = router;
