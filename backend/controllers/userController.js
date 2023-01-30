"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const User_1 = __importDefault(require("../models/User"));
const generateToken_1 = __importDefault(require("../utils/generateToken"));
// @Desc Register user
// @Route /api/users/register
// @Method POST
exports.register = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = new User_1.default({
        email,
        password,
    });
    yield user.save();
    const options = {
        expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };
    const token = (0, generateToken_1.default)(user._id);
    res.status(201).cookie("token", token, options).json({
        id: user._id,
        email: user.email,
        token: token
    });
}));
// @Desc Login user
// @Route /api/users/login
// @Method POST
exports.login = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.default.findOne({ email });
    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }
    if (yield user.comparePassword(password)) {
        const token = (0, generateToken_1.default)(user._id);
        const options = {
            expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };
        res.status(201).cookie("token", token, options).json({
            id: user._id,
            email: user.email,
            token: token
        });
    }
    else {
        res.status(401);
        throw new Error("Email or password incorrect");
    }
}));
