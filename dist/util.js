"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWString = exports.getDll = void 0;
const os = __importStar(require("os"));
const path_1 = __importDefault(require("path"));
const wchar_1 = __importDefault(require("./wchar"));
const getDll = () => {
    const libDir = path_1.default.join(__dirname, "../dlls");
    switch (os.arch()) {
        case "ia32":
            return path_1.default.join(libDir, "AutoItX3.dll");
        case "x64":
            return path_1.default.join(libDir, "AutoItX3_x64.dll");
    }
    return null;
};
exports.getDll = getDll;
const getWString = (buf) => {
    for (let i = 0; i < buf.length; i += wchar_1.default.size) {
        if (buf[i] == 0 && buf[i + 1] == 0)
            return wchar_1.default.toString(buf.slice(0, i));
    }
    return wchar_1.default.toString(buf);
};
exports.getWString = getWString;
