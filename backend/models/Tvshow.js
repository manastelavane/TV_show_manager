"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TvshowSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    streamingApp: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    review: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Tvshow = mongoose_1.default.model("Tvshow", TvshowSchema);
exports.default = Tvshow;
