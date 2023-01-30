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
exports.deleteTvshow = exports.myTvshow = exports.updateTvshow = exports.newTvshow = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Tvshow_1 = __importDefault(require("../models/Tvshow"));
// @Desc new Tvshow
// @Route /api/Tvshows
// @Method POST
exports.newTvshow = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, streamingApp, rating, review } = req.body;
    const tvshow = yield Tvshow_1.default.create({
        user: req.user._id,
        title,
        streamingApp,
        rating,
        review
    });
    res.status(201).json(tvshow);
}));
// @Desc Update Tvshow
// @Route /api/Tvshows/:id
// @Method PUT
exports.updateTvshow = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let tvshow = yield Tvshow_1.default.findById(req.params.id);
    if (!tvshow) {
        res.status(401);
        throw new Error("SHOW not found");
    }
    tvshow = yield Tvshow_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(201).json(tvshow);
}));
// @Desc Get all Tvshows current user
// @Route /api/Tvshows/me
// @Method GET
exports.myTvshow = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tvshow = yield Tvshow_1.default.find({ user: req.user._id });
    if (!tvshow) {
        res.status(401);
        throw new Error("Tvshows not found");
    }
    res.status(201).json(tvshow);
}));
// @Desc Delete Tvshow 
// @Route /api/Tvshows/:id
// @Method DELETE
exports.deleteTvshow = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tvshow = yield Tvshow_1.default.findById(req.params.id);
    const id = req.params.id;
    if (!tvshow) {
        res.status(401);
        throw new Error("Tvshow not found");
    }
    yield Tvshow_1.default.findByIdAndDelete(req.params.id);
    res.status(201).json({ id });
}));
