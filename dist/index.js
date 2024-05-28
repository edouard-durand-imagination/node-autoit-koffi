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
exports.opt = exports.mouseWheel = exports.mouseUp = exports.mouseMove = exports.mouseGetPos = exports.mouseGetCursor = exports.mouseDown = exports.mouseClickDrag = exports.mouseClick = exports.isAdmin = exports.driveMapGet = exports.driveMapDel = exports.driveMapAdd = exports.controlTreeViewByHandle = exports.controlTreeView = exports.controlShowByHandle = exports.controlShow = exports.controlSetTextByHandle = exports.controlSetText = exports.controlSendByHandle = exports.controlSend = exports.controlMoveByHandle = exports.controlMove = exports.controlHideByHandle = exports.controlHide = exports.controlGetTextByHandle = exports.controlGetText = exports.controlGetPosByHandle = exports.controlGetPos = exports.controlGetHandleAsText = exports.controlGetHandle = exports.controlGetFocusByHandle = exports.controlGetFocus = exports.controlFocusByHandle = exports.controlFocus = exports.controlEnableByHandle = exports.controlEnable = exports.controlDisableByHandle = exports.controlDisable = exports.controlListViewByHandle = exports.controlListView = exports.controlCommandByHandle = exports.controlCommand = exports.controlClickByHandle = exports.controlClick = exports.clipPut = exports.clipGet = exports.autoItSetOption = exports.error = exports.init = void 0;
exports.winMove = exports.winMinimizeAllUndo = exports.winMinimizeAll = exports.winMenuSelectItemByHandle = exports.winMenuSelectItem = exports.winKillByHandle = exports.winKill = exports.winGetTitleByHandle = exports.winGetTitle = exports.winGetTextByHandle = exports.winGetText = exports.winGetStateByHandle = exports.winGetState = exports.winGetProcessByHandle = exports.winGetProcess = exports.winGetPosByHandle = exports.winGetPos = exports.winGetHandleAsText = exports.winGetHandle = exports.winGetClientSizeByHandle = exports.winGetClientSize = exports.winGetClassListByHandle = exports.winGetClassList = exports.winGetCaretPos = exports.winExistsByHandle = exports.winExists = exports.winCloseByHandle = exports.winClose = exports.winActiveByHandle = exports.winActive = exports.winActivateByHandle = exports.winActivate = exports.toolTip = exports.statusbarGetTextByHandle = exports.statusbarGetText = exports.sleep = exports.shutdown = exports.send = exports.runAsWait = exports.runAs = exports.runWait = exports.run = exports.processWaitClose = exports.processWait = exports.processSetPriority = exports.processExists = exports.processClose = exports.pixelSearch = exports.pixelGetColor = exports.pixelChecksum = void 0;
exports.winWaitNotActiveByHandle = exports.winWaitNotActive = exports.winWaitCloseByHandle = exports.winWaitClose = exports.winWaitActiveByHandle = exports.winWaitActive = exports.winWaitByHandle = exports.winWait = exports.winSetTransByHandle = exports.winSetTrans = exports.winSetTitleByHandle = exports.winSetTitle = exports.winSetStateByHandle = exports.winSetState = exports.winSetOnTopByHandle = exports.winSetOnTop = exports.winMoveByHandle = void 0;
const util_1 = require("./util");
const koffi = __importStar(require("koffi"));
const wchar_1 = __importDefault(require("./wchar"));
const dll = (0, util_1.getDll)();
if (!dll)
    throw new Error("This operating system is not supported!");
const lib = koffi.load(dll);
koffi.struct("LPRECT", {
    left: "long",
    top: "long",
    right: "long",
    bottom: "long",
});
koffi.struct("LPPOINT", {
    x: "long",
    y: "long",
});
koffi.pointer("LPWSTR", "uint16_t*");
const fn = {};
// Generated code:
const init = () => {
    if (!fn.hasOwnProperty("init")) {
        fn["init"] = lib.func("AU3_Init", "void", []);
    }
    return new Promise((resolve, reject) => {
        fn["init"].async((err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.init = init;
const error = () => {
    if (!fn.hasOwnProperty("error")) {
        fn["error"] = lib.func("AU3_error", "int", []);
    }
    return new Promise((resolve, reject) => {
        fn["error"].async((err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.error = error;
const autoItSetOption = (szOption, nValue) => {
    if (!fn.hasOwnProperty("autoItSetOption")) {
        fn["autoItSetOption"] = lib.func("AU3_AutoItSetOption", "int", [
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["autoItSetOption"].async(szOption, nValue, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.autoItSetOption = autoItSetOption;
const clipGet = (nBufSize = 512) => {
    if (!fn.hasOwnProperty("clipGet")) {
        fn["clipGet"] = lib.func("AU3_ClipGet", "void", ["LPWSTR", "int"]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["clipGet"].async(result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else {
                const content = (0, util_1.getWString)(result);
                if (content.length === nBufSize - 1) {
                    resolve((0, exports.clipGet)(nBufSize * 2));
                }
                else {
                    resolve(content);
                }
            }
        });
    });
};
exports.clipGet = clipGet;
const clipPut = (szClip) => {
    if (!fn.hasOwnProperty("clipPut")) {
        fn["clipPut"] = lib.func("AU3_ClipPut", "void", ["string16"]);
    }
    return new Promise((resolve, reject) => {
        fn["clipPut"].async(szClip, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.clipPut = clipPut;
const controlClick = (szTitle, szText = "", szControl, szButton = "LEFT", nNumClicks = 1, nX = -2147483647, nY = -2147483647) => {
    if (!fn.hasOwnProperty("controlClick")) {
        fn["controlClick"] = lib.func("AU3_ControlClick", "int", [
            "string16",
            "string16",
            "string16",
            "string16",
            "int",
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlClick"].async(szTitle, szText, szControl, szButton, nNumClicks, nX, nY, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlClick = controlClick;
const controlClickByHandle = (hWnd, hCtrl, szButton = "LEFT", nNumClicks = 1, nX = -2147483647, nY = -2147483647) => {
    if (!fn.hasOwnProperty("controlClickByHandle")) {
        fn["controlClickByHandle"] = lib.func("AU3_ControlClickByHandle", "int", [
            "int",
            "int",
            "string16",
            "int",
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlClickByHandle"].async(hWnd, hCtrl, szButton, nNumClicks, nX, nY, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlClickByHandle = controlClickByHandle;
const controlCommand = (szTitle, szText = "", szControl, szCommand, szExtra = "", nBufSize = 256) => {
    if (!fn.hasOwnProperty("controlCommand")) {
        fn["controlCommand"] = lib.func("AU3_ControlCommand", "void", [
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["controlCommand"].async(szTitle, szText, szControl, szCommand, szExtra, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.controlCommand = controlCommand;
const controlCommandByHandle = (hWnd, hCtrl, szCommand, szExtra = "", nBufSize = 256) => {
    if (!fn.hasOwnProperty("controlCommandByHandle")) {
        fn["controlCommandByHandle"] = lib.func("AU3_ControlCommandByHandle", "void", ["int", "int", "string16", "string16", "LPWSTR", "int"]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["controlCommandByHandle"].async(hWnd, hCtrl, szCommand, szExtra, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.controlCommandByHandle = controlCommandByHandle;
const controlListView = (szTitle, szText = "", szControl, szCommand, szExtra1 = "", szExtra2 = "", nBufSize = 256) => {
    if (!fn.hasOwnProperty("controlListView")) {
        fn["controlListView"] = lib.func("AU3_ControlListView", "void", [
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["controlListView"].async(szTitle, szText, szControl, szCommand, szExtra1, szExtra2, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.controlListView = controlListView;
const controlListViewByHandle = (hWnd, hCtrl, szCommand, szExtra1 = "", szExtra2 = "", nBufSize = 256) => {
    if (!fn.hasOwnProperty("controlListViewByHandle")) {
        fn["controlListViewByHandle"] = lib.func("AU3_ControlListViewByHandle", "void", ["int", "int", "string16", "string16", "string16", "LPWSTR", "int"]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["controlListViewByHandle"].async(hWnd, hCtrl, szCommand, szExtra1, szExtra2, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.controlListViewByHandle = controlListViewByHandle;
const controlDisable = (szTitle, szText = "", szControl) => {
    if (!fn.hasOwnProperty("controlDisable")) {
        fn["controlDisable"] = lib.func("AU3_ControlDisable", "int", [
            "string16",
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlDisable"].async(szTitle, szText, szControl, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlDisable = controlDisable;
const controlDisableByHandle = (hWnd, hCtrl) => {
    if (!fn.hasOwnProperty("controlDisableByHandle")) {
        fn["controlDisableByHandle"] = lib.func("AU3_ControlDisableByHandle", "int", ["int", "int"]);
    }
    return new Promise((resolve, reject) => {
        fn["controlDisableByHandle"].async(hWnd, hCtrl, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlDisableByHandle = controlDisableByHandle;
const controlEnable = (szTitle, szText = "", szControl) => {
    if (!fn.hasOwnProperty("controlEnable")) {
        fn["controlEnable"] = lib.func("AU3_ControlEnable", "int", [
            "string16",
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlEnable"].async(szTitle, szText, szControl, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlEnable = controlEnable;
const controlEnableByHandle = (hWnd, hCtrl) => {
    if (!fn.hasOwnProperty("controlEnableByHandle")) {
        fn["controlEnableByHandle"] = lib.func("AU3_ControlEnableByHandle", "int", [
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlEnableByHandle"].async(hWnd, hCtrl, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlEnableByHandle = controlEnableByHandle;
const controlFocus = (szTitle, szText = "", szControl) => {
    if (!fn.hasOwnProperty("controlFocus")) {
        fn["controlFocus"] = lib.func("AU3_ControlFocus", "int", [
            "string16",
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlFocus"].async(szTitle, szText, szControl, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlFocus = controlFocus;
const controlFocusByHandle = (hWnd, hCtrl) => {
    if (!fn.hasOwnProperty("controlFocusByHandle")) {
        fn["controlFocusByHandle"] = lib.func("AU3_ControlFocusByHandle", "int", [
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlFocusByHandle"].async(hWnd, hCtrl, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlFocusByHandle = controlFocusByHandle;
const controlGetFocus = (szTitle, szText = "", nBufSize = 256) => {
    if (!fn.hasOwnProperty("controlGetFocus")) {
        fn["controlGetFocus"] = lib.func("AU3_ControlGetFocus", "void", [
            "string16",
            "string16",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["controlGetFocus"].async(szTitle, szText, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.controlGetFocus = controlGetFocus;
const controlGetFocusByHandle = (hWnd, nBufSize = 256) => {
    if (!fn.hasOwnProperty("controlGetFocusByHandle")) {
        fn["controlGetFocusByHandle"] = lib.func("AU3_ControlGetFocusByHandle", "void", ["int", "LPWSTR", "int"]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["controlGetFocusByHandle"].async(hWnd, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.controlGetFocusByHandle = controlGetFocusByHandle;
const controlGetHandle = (hWnd, szControl) => {
    if (!fn.hasOwnProperty("controlGetHandle")) {
        fn["controlGetHandle"] = lib.func("AU3_ControlGetHandle", "int", [
            "int",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlGetHandle"].async(hWnd, szControl, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlGetHandle = controlGetHandle;
const controlGetHandleAsText = (szTitle, szText = "", szControl, nBufSize = 256) => {
    if (!fn.hasOwnProperty("controlGetHandleAsText")) {
        fn["controlGetHandleAsText"] = lib.func("AU3_ControlGetHandleAsText", "void", ["string16", "string16", "string16", "LPWSTR", "int"]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["controlGetHandleAsText"].async(szTitle, szText, szControl, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.controlGetHandleAsText = controlGetHandleAsText;
const controlGetPos = (szTitle, szText = "", szControl) => {
    if (!fn.hasOwnProperty("controlGetPos")) {
        fn["controlGetPos"] = lib.func("AU3_ControlGetPos", "int", [
            "string16",
            "string16",
            "string16",
            "_Out_ LPRECT*",
        ]);
    }
    let result = {};
    return new Promise((resolve, reject) => {
        fn["controlGetPos"].async(szTitle, szText, szControl, result, (err, _) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};
exports.controlGetPos = controlGetPos;
const controlGetPosByHandle = (hWnd, hCtrl) => {
    if (!fn.hasOwnProperty("controlGetPosByHandle")) {
        fn["controlGetPosByHandle"] = lib.func("AU3_ControlGetPosByHandle", "int", [
            "int",
            "int",
            "_Out_ LPRECT*",
        ]);
    }
    let result = {};
    return new Promise((resolve, reject) => {
        fn["controlGetPosByHandle"].async(hWnd, hCtrl, result, (err, _) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};
exports.controlGetPosByHandle = controlGetPosByHandle;
const controlGetText = (szTitle, szText = "", szControl, nBufSize = 512) => {
    if (!fn.hasOwnProperty("controlGetText")) {
        fn["controlGetText"] = lib.func("AU3_ControlGetText", "void", [
            "string16",
            "string16",
            "string16",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["controlGetText"].async(szTitle, szText, szControl, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.controlGetText = controlGetText;
const controlGetTextByHandle = (hWnd, hCtrl, nBufSize = 512) => {
    if (!fn.hasOwnProperty("controlGetTextByHandle")) {
        fn["controlGetTextByHandle"] = lib.func("AU3_ControlGetTextByHandle", "void", ["int", "int", "LPWSTR", "int"]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["controlGetTextByHandle"].async(hWnd, hCtrl, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.controlGetTextByHandle = controlGetTextByHandle;
const controlHide = (szTitle, szText = "", szControl) => {
    if (!fn.hasOwnProperty("controlHide")) {
        fn["controlHide"] = lib.func("AU3_ControlHide", "int", [
            "string16",
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlHide"].async(szTitle, szText, szControl, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlHide = controlHide;
const controlHideByHandle = (hWnd, hCtrl) => {
    if (!fn.hasOwnProperty("controlHideByHandle")) {
        fn["controlHideByHandle"] = lib.func("AU3_ControlHideByHandle", "int", [
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlHideByHandle"].async(hWnd, hCtrl, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlHideByHandle = controlHideByHandle;
const controlMove = (szTitle, szText = "", szControl, nX, nY, nWidth = -1, nHeight = -1) => {
    if (!fn.hasOwnProperty("controlMove")) {
        fn["controlMove"] = lib.func("AU3_ControlMove", "int", [
            "string16",
            "string16",
            "string16",
            "int",
            "int",
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlMove"].async(szTitle, szText, szControl, nX, nY, nWidth, nHeight, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlMove = controlMove;
const controlMoveByHandle = (hWnd, hCtrl, nX, nY, nWidth = -1, nHeight = -1) => {
    if (!fn.hasOwnProperty("controlMoveByHandle")) {
        fn["controlMoveByHandle"] = lib.func("AU3_ControlMoveByHandle", "int", [
            "int",
            "int",
            "int",
            "int",
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlMoveByHandle"].async(hWnd, hCtrl, nX, nY, nWidth, nHeight, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlMoveByHandle = controlMoveByHandle;
const controlSend = (szTitle, szText = "", szControl, szSendText, nMode = 0) => {
    if (!fn.hasOwnProperty("controlSend")) {
        fn["controlSend"] = lib.func("AU3_ControlSend", "int", [
            "string16",
            "string16",
            "string16",
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlSend"].async(szTitle, szText, szControl, szSendText, nMode, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlSend = controlSend;
const controlSendByHandle = (hWnd, hCtrl, szSendText, nMode = 0) => {
    if (!fn.hasOwnProperty("controlSendByHandle")) {
        fn["controlSendByHandle"] = lib.func("AU3_ControlSendByHandle", "int", [
            "int",
            "int",
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlSendByHandle"].async(hWnd, hCtrl, szSendText, nMode, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlSendByHandle = controlSendByHandle;
const controlSetText = (szTitle, szText = "", szControl, szControlText) => {
    if (!fn.hasOwnProperty("controlSetText")) {
        fn["controlSetText"] = lib.func("AU3_ControlSetText", "int", [
            "string16",
            "string16",
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlSetText"].async(szTitle, szText, szControl, szControlText, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlSetText = controlSetText;
const controlSetTextByHandle = (hWnd, hCtrl, szControlText) => {
    if (!fn.hasOwnProperty("controlSetTextByHandle")) {
        fn["controlSetTextByHandle"] = lib.func("AU3_ControlSetTextByHandle", "int", ["int", "int", "string16"]);
    }
    return new Promise((resolve, reject) => {
        fn["controlSetTextByHandle"].async(hWnd, hCtrl, szControlText, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlSetTextByHandle = controlSetTextByHandle;
const controlShow = (szTitle, szText = "", szControl) => {
    if (!fn.hasOwnProperty("controlShow")) {
        fn["controlShow"] = lib.func("AU3_ControlShow", "int", [
            "string16",
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlShow"].async(szTitle, szText, szControl, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlShow = controlShow;
const controlShowByHandle = (hWnd, hCtrl) => {
    if (!fn.hasOwnProperty("controlShowByHandle")) {
        fn["controlShowByHandle"] = lib.func("AU3_ControlShowByHandle", "int", [
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["controlShowByHandle"].async(hWnd, hCtrl, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.controlShowByHandle = controlShowByHandle;
const controlTreeView = (szTitle, szText = "", szControl, szCommand, szExtra1 = "", szExtra2 = "", nBufSize = 256) => {
    if (!fn.hasOwnProperty("controlTreeView")) {
        fn["controlTreeView"] = lib.func("AU3_ControlTreeView", "void", [
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["controlTreeView"].async(szTitle, szText, szControl, szCommand, szExtra1, szExtra2, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.controlTreeView = controlTreeView;
const controlTreeViewByHandle = (hWnd, hCtrl, szCommand, szExtra1 = "", szExtra2 = "", nBufSize = 256) => {
    if (!fn.hasOwnProperty("controlTreeViewByHandle")) {
        fn["controlTreeViewByHandle"] = lib.func("AU3_ControlTreeViewByHandle", "void", ["int", "int", "string16", "string16", "string16", "LPWSTR", "int"]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["controlTreeViewByHandle"].async(hWnd, hCtrl, szCommand, szExtra1, szExtra2, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.controlTreeViewByHandle = controlTreeViewByHandle;
const driveMapAdd = (szDevice, szShare, nFlags, szUser = "", szPwd = "", nBufSize = 256) => {
    if (!fn.hasOwnProperty("driveMapAdd")) {
        fn["driveMapAdd"] = lib.func("AU3_DriveMapAdd", "void", [
            "string16",
            "string16",
            "int",
            "string16",
            "string16",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["driveMapAdd"].async(szDevice, szShare, nFlags, szUser, szPwd, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.driveMapAdd = driveMapAdd;
const driveMapDel = (szDevice) => {
    if (!fn.hasOwnProperty("driveMapDel")) {
        fn["driveMapDel"] = lib.func("AU3_DriveMapDel", "int", ["string16"]);
    }
    return new Promise((resolve, reject) => {
        fn["driveMapDel"].async(szDevice, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.driveMapDel = driveMapDel;
const driveMapGet = (szDevice, nBufSize = 256) => {
    if (!fn.hasOwnProperty("driveMapGet")) {
        fn["driveMapGet"] = lib.func("AU3_DriveMapGet", "void", [
            "string16",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["driveMapGet"].async(szDevice, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.driveMapGet = driveMapGet;
const isAdmin = () => {
    if (!fn.hasOwnProperty("isAdmin")) {
        fn["isAdmin"] = lib.func("AU3_IsAdmin", "int", []);
    }
    return new Promise((resolve, reject) => {
        fn["isAdmin"].async((err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.isAdmin = isAdmin;
const mouseClick = (szButton = "LEFT", nX = -2147483647, nY = -2147483647, nClicks = 1, nSpeed = -1) => {
    if (!fn.hasOwnProperty("mouseClick")) {
        fn["mouseClick"] = lib.func("AU3_MouseClick", "int", [
            "string16",
            "int",
            "int",
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["mouseClick"].async(szButton, nX, nY, nClicks, nSpeed, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.mouseClick = mouseClick;
const mouseClickDrag = (szButton, nX1, nY1, nX2, nY2, nSpeed = -1) => {
    if (!fn.hasOwnProperty("mouseClickDrag")) {
        fn["mouseClickDrag"] = lib.func("AU3_MouseClickDrag", "int", [
            "string16",
            "int",
            "int",
            "int",
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["mouseClickDrag"].async(szButton, nX1, nY1, nX2, nY2, nSpeed, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.mouseClickDrag = mouseClickDrag;
const mouseDown = (szButton = "LEFT") => {
    if (!fn.hasOwnProperty("mouseDown")) {
        fn["mouseDown"] = lib.func("AU3_MouseDown", "void", ["string16"]);
    }
    return new Promise((resolve, reject) => {
        fn["mouseDown"].async(szButton, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.mouseDown = mouseDown;
const mouseGetCursor = () => {
    if (!fn.hasOwnProperty("mouseGetCursor")) {
        fn["mouseGetCursor"] = lib.func("AU3_MouseGetCursor", "int", []);
    }
    return new Promise((resolve, reject) => {
        fn["mouseGetCursor"].async((err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.mouseGetCursor = mouseGetCursor;
const mouseGetPos = () => {
    if (!fn.hasOwnProperty("mouseGetPos")) {
        fn["mouseGetPos"] = lib.func("AU3_MouseGetPos", "void", ["_Out_ LPPOINT*"]);
    }
    let result = {};
    return new Promise((resolve, reject) => {
        fn["mouseGetPos"].async(result, (err, _) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};
exports.mouseGetPos = mouseGetPos;
const mouseMove = (nX, nY, nSpeed = -1) => {
    if (!fn.hasOwnProperty("mouseMove")) {
        fn["mouseMove"] = lib.func("AU3_MouseMove", "int", ["int", "int", "int"]);
    }
    return new Promise((resolve, reject) => {
        fn["mouseMove"].async(nX, nY, nSpeed, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.mouseMove = mouseMove;
const mouseUp = (szButton = "LEFT") => {
    if (!fn.hasOwnProperty("mouseUp")) {
        fn["mouseUp"] = lib.func("AU3_MouseUp", "void", ["string16"]);
    }
    return new Promise((resolve, reject) => {
        fn["mouseUp"].async(szButton, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.mouseUp = mouseUp;
const mouseWheel = (szDirection, nClicks) => {
    if (!fn.hasOwnProperty("mouseWheel")) {
        fn["mouseWheel"] = lib.func("AU3_MouseWheel", "void", ["string16", "int"]);
    }
    return new Promise((resolve, reject) => {
        fn["mouseWheel"].async(szDirection, nClicks, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.mouseWheel = mouseWheel;
const opt = (szOption, nValue) => {
    if (!fn.hasOwnProperty("opt")) {
        fn["opt"] = lib.func("AU3_Opt", "int", ["string16", "int"]);
    }
    return new Promise((resolve, reject) => {
        fn["opt"].async(szOption, nValue, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.opt = opt;
const pixelChecksum = (lpRect, nStep = 1) => {
    if (!fn.hasOwnProperty("pixelChecksum")) {
        fn["pixelChecksum"] = lib.func("AU3_PixelChecksum", "uint", [
            "LPRECT",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["pixelChecksum"].async(lpRect, nStep, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.pixelChecksum = pixelChecksum;
const pixelGetColor = (nX, nY) => {
    if (!fn.hasOwnProperty("pixelGetColor")) {
        fn["pixelGetColor"] = lib.func("AU3_PixelGetColor", "int", ["int", "int"]);
    }
    return new Promise((resolve, reject) => {
        fn["pixelGetColor"].async(nX, nY, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.pixelGetColor = pixelGetColor;
const pixelSearch = (lpRect, nCol, nVar = 0, nStep = 1) => {
    if (!fn.hasOwnProperty("pixelSearch")) {
        fn["pixelSearch"] = lib.func("AU3_PixelSearch", "void", [
            "LPRECT",
            "int",
            "int",
            "int",
            "_Out_ LPPOINT*",
        ]);
    }
    let result = {};
    return new Promise((resolve, reject) => {
        fn["pixelSearch"].async(lpRect, nCol, nVar, nStep, result, (err, _) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};
exports.pixelSearch = pixelSearch;
const processClose = (szProcess) => {
    if (!fn.hasOwnProperty("processClose")) {
        fn["processClose"] = lib.func("AU3_ProcessClose", "int", ["string16"]);
    }
    return new Promise((resolve, reject) => {
        fn["processClose"].async(szProcess, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.processClose = processClose;
const processExists = (szProcess) => {
    if (!fn.hasOwnProperty("processExists")) {
        fn["processExists"] = lib.func("AU3_ProcessExists", "int", ["string16"]);
    }
    return new Promise((resolve, reject) => {
        fn["processExists"].async(szProcess, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.processExists = processExists;
const processSetPriority = (szProcess, nPriority) => {
    if (!fn.hasOwnProperty("processSetPriority")) {
        fn["processSetPriority"] = lib.func("AU3_ProcessSetPriority", "int", [
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["processSetPriority"].async(szProcess, nPriority, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.processSetPriority = processSetPriority;
const processWait = (szProcess, nTimeout = 0) => {
    if (!fn.hasOwnProperty("processWait")) {
        fn["processWait"] = lib.func("AU3_ProcessWait", "int", ["string16", "int"]);
    }
    return new Promise((resolve, reject) => {
        fn["processWait"].async(szProcess, nTimeout, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.processWait = processWait;
const processWaitClose = (szProcess, nTimeout = 0) => {
    if (!fn.hasOwnProperty("processWaitClose")) {
        fn["processWaitClose"] = lib.func("AU3_ProcessWaitClose", "int", [
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["processWaitClose"].async(szProcess, nTimeout, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.processWaitClose = processWaitClose;
const run = (szProgram, szDir = "", nShowFlag = 1) => {
    if (!fn.hasOwnProperty("run")) {
        fn["run"] = lib.func("AU3_Run", "int", ["string16", "string16", "int"]);
    }
    return new Promise((resolve, reject) => {
        fn["run"].async(szProgram, szDir, nShowFlag, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.run = run;
const runWait = (szProgram, szDir = "", nShowFlag = 1) => {
    if (!fn.hasOwnProperty("runWait")) {
        fn["runWait"] = lib.func("AU3_RunWait", "int", [
            "string16",
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["runWait"].async(szProgram, szDir, nShowFlag, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.runWait = runWait;
const runAs = (szUser, szDomain, szPassword, nLogonFlag, szProgram, szDir = "", nShowFlag = 1) => {
    if (!fn.hasOwnProperty("runAs")) {
        fn["runAs"] = lib.func("AU3_RunAs", "int", [
            "string16",
            "string16",
            "string16",
            "int",
            "string16",
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["runAs"].async(szUser, szDomain, szPassword, nLogonFlag, szProgram, szDir, nShowFlag, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.runAs = runAs;
const runAsWait = (szUser, szDomain, szPassword, nLogonFlag, szProgram, szDir = "", nShowFlag = 1) => {
    if (!fn.hasOwnProperty("runAsWait")) {
        fn["runAsWait"] = lib.func("AU3_RunAsWait", "int", [
            "string16",
            "string16",
            "string16",
            "int",
            "string16",
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["runAsWait"].async(szUser, szDomain, szPassword, nLogonFlag, szProgram, szDir, nShowFlag, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.runAsWait = runAsWait;
const send = (szSendText, nMode = 0) => {
    if (!fn.hasOwnProperty("send")) {
        fn["send"] = lib.func("AU3_Send", "void", ["string16", "int"]);
    }
    return new Promise((resolve, reject) => {
        fn["send"].async(szSendText, nMode, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.send = send;
const shutdown = (nFlags) => {
    if (!fn.hasOwnProperty("shutdown")) {
        fn["shutdown"] = lib.func("AU3_Shutdown", "int", ["int"]);
    }
    return new Promise((resolve, reject) => {
        fn["shutdown"].async(nFlags, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.shutdown = shutdown;
const sleep = (nMilliseconds) => {
    if (!fn.hasOwnProperty("sleep")) {
        fn["sleep"] = lib.func("AU3_Sleep", "void", ["int"]);
    }
    return new Promise((resolve, reject) => {
        fn["sleep"].async(nMilliseconds, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.sleep = sleep;
const statusbarGetText = (szTitle, szText = "", nPart = 1, nBufSize = 256) => {
    if (!fn.hasOwnProperty("statusbarGetText")) {
        fn["statusbarGetText"] = lib.func("AU3_StatusbarGetText", "int", [
            "string16",
            "string16",
            "int",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["statusbarGetText"].async(szTitle, szText, nPart, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.statusbarGetText = statusbarGetText;
const statusbarGetTextByHandle = (hWnd, nPart = 1, nBufSize = 256) => {
    if (!fn.hasOwnProperty("statusbarGetTextByHandle")) {
        fn["statusbarGetTextByHandle"] = lib.func("AU3_StatusbarGetTextByHandle", "int", ["int", "int", "LPWSTR", "int"]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["statusbarGetTextByHandle"].async(hWnd, nPart, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.statusbarGetTextByHandle = statusbarGetTextByHandle;
const toolTip = (szTip, nX = -2147483647, nY = -2147483647) => {
    if (!fn.hasOwnProperty("toolTip")) {
        fn["toolTip"] = lib.func("AU3_ToolTip", "void", ["string16", "int", "int"]);
    }
    return new Promise((resolve, reject) => {
        fn["toolTip"].async(szTip, nX, nY, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.toolTip = toolTip;
const winActivate = (szTitle, szText = "") => {
    if (!fn.hasOwnProperty("winActivate")) {
        fn["winActivate"] = lib.func("AU3_WinActivate", "int", [
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winActivate"].async(szTitle, szText, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winActivate = winActivate;
const winActivateByHandle = (hWnd) => {
    if (!fn.hasOwnProperty("winActivateByHandle")) {
        fn["winActivateByHandle"] = lib.func("AU3_WinActivateByHandle", "int", [
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winActivateByHandle"].async(hWnd, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winActivateByHandle = winActivateByHandle;
const winActive = (szTitle, szText) => {
    if (!fn.hasOwnProperty("winActive")) {
        fn["winActive"] = lib.func("AU3_WinActive", "int", [
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winActive"].async(szTitle, szText, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winActive = winActive;
const winActiveByHandle = (hWnd) => {
    if (!fn.hasOwnProperty("winActiveByHandle")) {
        fn["winActiveByHandle"] = lib.func("AU3_WinActiveByHandle", "int", ["int"]);
    }
    return new Promise((resolve, reject) => {
        fn["winActiveByHandle"].async(hWnd, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winActiveByHandle = winActiveByHandle;
const winClose = (szTitle, szText = "") => {
    if (!fn.hasOwnProperty("winClose")) {
        fn["winClose"] = lib.func("AU3_WinClose", "int", ["string16", "string16"]);
    }
    return new Promise((resolve, reject) => {
        fn["winClose"].async(szTitle, szText, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winClose = winClose;
const winCloseByHandle = (hWnd) => {
    if (!fn.hasOwnProperty("winCloseByHandle")) {
        fn["winCloseByHandle"] = lib.func("AU3_WinCloseByHandle", "int", ["int"]);
    }
    return new Promise((resolve, reject) => {
        fn["winCloseByHandle"].async(hWnd, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winCloseByHandle = winCloseByHandle;
const winExists = (szTitle, szText = "") => {
    if (!fn.hasOwnProperty("winExists")) {
        fn["winExists"] = lib.func("AU3_WinExists", "int", [
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winExists"].async(szTitle, szText, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winExists = winExists;
const winExistsByHandle = (hWnd) => {
    if (!fn.hasOwnProperty("winExistsByHandle")) {
        fn["winExistsByHandle"] = lib.func("AU3_WinExistsByHandle", "int", ["int"]);
    }
    return new Promise((resolve, reject) => {
        fn["winExistsByHandle"].async(hWnd, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winExistsByHandle = winExistsByHandle;
const winGetCaretPos = () => {
    if (!fn.hasOwnProperty("winGetCaretPos")) {
        fn["winGetCaretPos"] = lib.func("AU3_WinGetCaretPos", "int", [
            "_Out_ LPPOINT*",
        ]);
    }
    let result = {};
    return new Promise((resolve, reject) => {
        fn["winGetCaretPos"].async(result, (err, _) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};
exports.winGetCaretPos = winGetCaretPos;
const winGetClassList = (szTitle, szText = "", nBufSize = 512) => {
    if (!fn.hasOwnProperty("winGetClassList")) {
        fn["winGetClassList"] = lib.func("AU3_WinGetClassList", "void", [
            "string16",
            "string16",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["winGetClassList"].async(szTitle, szText, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.winGetClassList = winGetClassList;
const winGetClassListByHandle = (hWnd, nBufSize = 512) => {
    if (!fn.hasOwnProperty("winGetClassListByHandle")) {
        fn["winGetClassListByHandle"] = lib.func("AU3_WinGetClassListByHandle", "void", ["int", "LPWSTR", "int"]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["winGetClassListByHandle"].async(hWnd, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.winGetClassListByHandle = winGetClassListByHandle;
const winGetClientSize = (szTitle, szText = "") => {
    if (!fn.hasOwnProperty("winGetClientSize")) {
        fn["winGetClientSize"] = lib.func("AU3_WinGetClientSize", "int", [
            "string16",
            "string16",
            "_Out_ LPRECT*",
        ]);
    }
    let result = {};
    return new Promise((resolve, reject) => {
        fn["winGetClientSize"].async(szTitle, szText, result, (err, _) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};
exports.winGetClientSize = winGetClientSize;
const winGetClientSizeByHandle = (hWnd) => {
    if (!fn.hasOwnProperty("winGetClientSizeByHandle")) {
        fn["winGetClientSizeByHandle"] = lib.func("AU3_WinGetClientSizeByHandle", "int", ["int", "_Out_ LPRECT*"]);
    }
    let result = {};
    return new Promise((resolve, reject) => {
        fn["winGetClientSizeByHandle"].async(hWnd, result, (err, _) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};
exports.winGetClientSizeByHandle = winGetClientSizeByHandle;
const winGetHandle = (szTitle, szText = "") => {
    if (!fn.hasOwnProperty("winGetHandle")) {
        fn["winGetHandle"] = lib.func("AU3_WinGetHandle", "int", [
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winGetHandle"].async(szTitle, szText, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winGetHandle = winGetHandle;
const winGetHandleAsText = (szTitle, szText = "", nBufSize = 256) => {
    if (!fn.hasOwnProperty("winGetHandleAsText")) {
        fn["winGetHandleAsText"] = lib.func("AU3_WinGetHandleAsText", "void", [
            "string16",
            "string16",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["winGetHandleAsText"].async(szTitle, szText, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.winGetHandleAsText = winGetHandleAsText;
const winGetPos = (szTitle, szText = "") => {
    if (!fn.hasOwnProperty("winGetPos")) {
        fn["winGetPos"] = lib.func("AU3_WinGetPos", "int", [
            "string16",
            "string16",
            "_Out_ LPRECT*",
        ]);
    }
    let result = {};
    return new Promise((resolve, reject) => {
        fn["winGetPos"].async(szTitle, szText, result, (err, _) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};
exports.winGetPos = winGetPos;
const winGetPosByHandle = (hWnd) => {
    if (!fn.hasOwnProperty("winGetPosByHandle")) {
        fn["winGetPosByHandle"] = lib.func("AU3_WinGetPosByHandle", "int", [
            "int",
            "_Out_ LPRECT*",
        ]);
    }
    let result = {};
    return new Promise((resolve, reject) => {
        fn["winGetPosByHandle"].async(hWnd, result, (err, _) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};
exports.winGetPosByHandle = winGetPosByHandle;
const winGetProcess = (szTitle, szText = "") => {
    if (!fn.hasOwnProperty("winGetProcess")) {
        fn["winGetProcess"] = lib.func("AU3_WinGetProcess", "uint32", [
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winGetProcess"].async(szTitle, szText, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winGetProcess = winGetProcess;
const winGetProcessByHandle = (hWnd) => {
    if (!fn.hasOwnProperty("winGetProcessByHandle")) {
        fn["winGetProcessByHandle"] = lib.func("AU3_WinGetProcessByHandle", "uint32", ["int"]);
    }
    return new Promise((resolve, reject) => {
        fn["winGetProcessByHandle"].async(hWnd, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winGetProcessByHandle = winGetProcessByHandle;
const winGetState = (szTitle, szText = "") => {
    if (!fn.hasOwnProperty("winGetState")) {
        fn["winGetState"] = lib.func("AU3_WinGetState", "int", [
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winGetState"].async(szTitle, szText, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winGetState = winGetState;
const winGetStateByHandle = (hWnd) => {
    if (!fn.hasOwnProperty("winGetStateByHandle")) {
        fn["winGetStateByHandle"] = lib.func("AU3_WinGetStateByHandle", "int", [
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winGetStateByHandle"].async(hWnd, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winGetStateByHandle = winGetStateByHandle;
const winGetText = (szTitle, szText = "", nBufSize = 512) => {
    if (!fn.hasOwnProperty("winGetText")) {
        fn["winGetText"] = lib.func("AU3_WinGetText", "void", [
            "string16",
            "string16",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["winGetText"].async(szTitle, szText, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.winGetText = winGetText;
const winGetTextByHandle = (hWnd, nBufSize = 512) => {
    if (!fn.hasOwnProperty("winGetTextByHandle")) {
        fn["winGetTextByHandle"] = lib.func("AU3_WinGetTextByHandle", "void", [
            "int",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["winGetTextByHandle"].async(hWnd, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.winGetTextByHandle = winGetTextByHandle;
const winGetTitle = (szTitle, szText = "", nBufSize = 512) => {
    if (!fn.hasOwnProperty("winGetTitle")) {
        fn["winGetTitle"] = lib.func("AU3_WinGetTitle", "void", [
            "string16",
            "string16",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["winGetTitle"].async(szTitle, szText, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.winGetTitle = winGetTitle;
const winGetTitleByHandle = (hWnd, nBufSize = 512) => {
    if (!fn.hasOwnProperty("winGetTitleByHandle")) {
        fn["winGetTitleByHandle"] = lib.func("AU3_WinGetTitleByHandle", "void", [
            "int",
            "LPWSTR",
            "int",
        ]);
    }
    let result = Buffer.alloc(nBufSize * wchar_1.default.size);
    return new Promise((resolve, reject) => {
        fn["winGetTitleByHandle"].async(hWnd, result, nBufSize, (err, _) => {
            if (err)
                reject(err);
            else
                resolve((0, util_1.getWString)(result));
        });
    });
};
exports.winGetTitleByHandle = winGetTitleByHandle;
const winKill = (szTitle, szText = "") => {
    if (!fn.hasOwnProperty("winKill")) {
        fn["winKill"] = lib.func("AU3_WinKill", "int", ["string16", "string16"]);
    }
    return new Promise((resolve, reject) => {
        fn["winKill"].async(szTitle, szText, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winKill = winKill;
const winKillByHandle = (hWnd) => {
    if (!fn.hasOwnProperty("winKillByHandle")) {
        fn["winKillByHandle"] = lib.func("AU3_WinKillByHandle", "int", ["int"]);
    }
    return new Promise((resolve, reject) => {
        fn["winKillByHandle"].async(hWnd, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winKillByHandle = winKillByHandle;
const winMenuSelectItem = (szTitle, szText = "", szItem1, szItem2 = "", szItem3 = "", szItem4 = "", szItem5 = "", szItem6 = "", szItem7 = "", szItem8 = "") => {
    if (!fn.hasOwnProperty("winMenuSelectItem")) {
        fn["winMenuSelectItem"] = lib.func("AU3_WinMenuSelectItem", "int", [
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winMenuSelectItem"].async(szTitle, szText, szItem1, szItem2, szItem3, szItem4, szItem5, szItem6, szItem7, szItem8, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winMenuSelectItem = winMenuSelectItem;
const winMenuSelectItemByHandle = (hWnd, szItem1, szItem2 = "", szItem3 = "", szItem4 = "", szItem5 = "", szItem6 = "", szItem7 = "", szItem8 = "") => {
    if (!fn.hasOwnProperty("winMenuSelectItemByHandle")) {
        fn["winMenuSelectItemByHandle"] = lib.func("AU3_WinMenuSelectItemByHandle", "int", [
            "int",
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winMenuSelectItemByHandle"].async(hWnd, szItem1, szItem2, szItem3, szItem4, szItem5, szItem6, szItem7, szItem8, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winMenuSelectItemByHandle = winMenuSelectItemByHandle;
const winMinimizeAll = () => {
    if (!fn.hasOwnProperty("winMinimizeAll")) {
        fn["winMinimizeAll"] = lib.func("AU3_WinMinimizeAll", "void", []);
    }
    return new Promise((resolve, reject) => {
        fn["winMinimizeAll"].async((err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winMinimizeAll = winMinimizeAll;
const winMinimizeAllUndo = () => {
    if (!fn.hasOwnProperty("winMinimizeAllUndo")) {
        fn["winMinimizeAllUndo"] = lib.func("AU3_WinMinimizeAllUndo", "void", []);
    }
    return new Promise((resolve, reject) => {
        fn["winMinimizeAllUndo"].async((err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winMinimizeAllUndo = winMinimizeAllUndo;
const winMove = (szTitle, szText = "", nX, nY, nWidth = -1, nHeight = -1) => {
    if (!fn.hasOwnProperty("winMove")) {
        fn["winMove"] = lib.func("AU3_WinMove", "int", [
            "string16",
            "string16",
            "int",
            "int",
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winMove"].async(szTitle, szText, nX, nY, nWidth, nHeight, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winMove = winMove;
const winMoveByHandle = (hWnd, nX, nY, nWidth = -1, nHeight = -1) => {
    if (!fn.hasOwnProperty("winMoveByHandle")) {
        fn["winMoveByHandle"] = lib.func("AU3_WinMoveByHandle", "int", [
            "int",
            "int",
            "int",
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winMoveByHandle"].async(hWnd, nX, nY, nWidth, nHeight, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winMoveByHandle = winMoveByHandle;
const winSetOnTop = (szTitle, szText = "", nFlag) => {
    if (!fn.hasOwnProperty("winSetOnTop")) {
        fn["winSetOnTop"] = lib.func("AU3_WinSetOnTop", "int", [
            "string16",
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winSetOnTop"].async(szTitle, szText, nFlag, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winSetOnTop = winSetOnTop;
const winSetOnTopByHandle = (hWnd, nFlag) => {
    if (!fn.hasOwnProperty("winSetOnTopByHandle")) {
        fn["winSetOnTopByHandle"] = lib.func("AU3_WinSetOnTopByHandle", "int", [
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winSetOnTopByHandle"].async(hWnd, nFlag, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winSetOnTopByHandle = winSetOnTopByHandle;
const winSetState = (szTitle, szText = "", nFlags) => {
    if (!fn.hasOwnProperty("winSetState")) {
        fn["winSetState"] = lib.func("AU3_WinSetState", "int", [
            "string16",
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winSetState"].async(szTitle, szText, nFlags, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winSetState = winSetState;
const winSetStateByHandle = (hWnd, nFlags) => {
    if (!fn.hasOwnProperty("winSetStateByHandle")) {
        fn["winSetStateByHandle"] = lib.func("AU3_WinSetStateByHandle", "int", [
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winSetStateByHandle"].async(hWnd, nFlags, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winSetStateByHandle = winSetStateByHandle;
const winSetTitle = (szTitle, szText = "", szNewTitle) => {
    if (!fn.hasOwnProperty("winSetTitle")) {
        fn["winSetTitle"] = lib.func("AU3_WinSetTitle", "int", [
            "string16",
            "string16",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winSetTitle"].async(szTitle, szText, szNewTitle, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winSetTitle = winSetTitle;
const winSetTitleByHandle = (hWnd, szNewTitle) => {
    if (!fn.hasOwnProperty("winSetTitleByHandle")) {
        fn["winSetTitleByHandle"] = lib.func("AU3_WinSetTitleByHandle", "int", [
            "int",
            "string16",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winSetTitleByHandle"].async(hWnd, szNewTitle, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winSetTitleByHandle = winSetTitleByHandle;
const winSetTrans = (szTitle, szText = "", nTrans) => {
    if (!fn.hasOwnProperty("winSetTrans")) {
        fn["winSetTrans"] = lib.func("AU3_WinSetTrans", "int", [
            "string16",
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winSetTrans"].async(szTitle, szText, nTrans, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winSetTrans = winSetTrans;
const winSetTransByHandle = (hWnd, nTrans) => {
    if (!fn.hasOwnProperty("winSetTransByHandle")) {
        fn["winSetTransByHandle"] = lib.func("AU3_WinSetTransByHandle", "int", [
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winSetTransByHandle"].async(hWnd, nTrans, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winSetTransByHandle = winSetTransByHandle;
const winWait = (szTitle, szText = "", nTimeout = 0) => {
    if (!fn.hasOwnProperty("winWait")) {
        fn["winWait"] = lib.func("AU3_WinWait", "int", [
            "string16",
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winWait"].async(szTitle, szText, nTimeout, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winWait = winWait;
const winWaitByHandle = (hWnd, nTimeout = 0) => {
    if (!fn.hasOwnProperty("winWaitByHandle")) {
        fn["winWaitByHandle"] = lib.func("AU3_WinWaitByHandle", "int", [
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winWaitByHandle"].async(hWnd, nTimeout, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winWaitByHandle = winWaitByHandle;
const winWaitActive = (szTitle, szText = "", nTimeout = 0) => {
    if (!fn.hasOwnProperty("winWaitActive")) {
        fn["winWaitActive"] = lib.func("AU3_WinWaitActive", "int", [
            "string16",
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winWaitActive"].async(szTitle, szText, nTimeout, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winWaitActive = winWaitActive;
const winWaitActiveByHandle = (hWnd, nTimeout = 0) => {
    if (!fn.hasOwnProperty("winWaitActiveByHandle")) {
        fn["winWaitActiveByHandle"] = lib.func("AU3_WinWaitActiveByHandle", "int", [
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winWaitActiveByHandle"].async(hWnd, nTimeout, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winWaitActiveByHandle = winWaitActiveByHandle;
const winWaitClose = (szTitle, szText = "", nTimeout = 0) => {
    if (!fn.hasOwnProperty("winWaitClose")) {
        fn["winWaitClose"] = lib.func("AU3_WinWaitClose", "int", [
            "string16",
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winWaitClose"].async(szTitle, szText, nTimeout, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winWaitClose = winWaitClose;
const winWaitCloseByHandle = (hWnd, nTimeout = 0) => {
    if (!fn.hasOwnProperty("winWaitCloseByHandle")) {
        fn["winWaitCloseByHandle"] = lib.func("AU3_WinWaitCloseByHandle", "int", [
            "int",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winWaitCloseByHandle"].async(hWnd, nTimeout, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winWaitCloseByHandle = winWaitCloseByHandle;
const winWaitNotActive = (szTitle, szText = "", nTimeout = 0) => {
    if (!fn.hasOwnProperty("winWaitNotActive")) {
        fn["winWaitNotActive"] = lib.func("AU3_WinWaitNotActive", "int", [
            "string16",
            "string16",
            "int",
        ]);
    }
    return new Promise((resolve, reject) => {
        fn["winWaitNotActive"].async(szTitle, szText, nTimeout, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winWaitNotActive = winWaitNotActive;
const winWaitNotActiveByHandle = (hWnd, nTimeout = 0) => {
    if (!fn.hasOwnProperty("winWaitNotActiveByHandle")) {
        fn["winWaitNotActiveByHandle"] = lib.func("AU3_WinWaitNotActiveByHandle", "int", ["int", "int"]);
    }
    return new Promise((resolve, reject) => {
        fn["winWaitNotActiveByHandle"].async(hWnd, nTimeout, (err, res) => {
            if (err)
                reject(err);
            else
                resolve(res);
        });
    });
};
exports.winWaitNotActiveByHandle = winWaitNotActiveByHandle;
