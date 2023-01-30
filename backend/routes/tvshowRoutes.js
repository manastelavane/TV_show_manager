"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tvshowController_1 = require("../controllers/tvshowController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router.route("/").post(authMiddleware_1.protect, tvshowController_1.newTvshow);
router.route("/me").get(authMiddleware_1.protect, tvshowController_1.myTvshow);
router.route("/:id").put(authMiddleware_1.protect, tvshowController_1.updateTvshow).delete(authMiddleware_1.protect, tvshowController_1.deleteTvshow);
exports.default = router;
