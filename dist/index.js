"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warn = exports.Clear = exports.Err = exports.Log = void 0;
var Logs_1 = __importDefault(require("./utils/Logs"));
exports.Log = Logs_1.default;
var Error_1 = __importDefault(require("./utils/Error"));
exports.Err = Error_1.default;
var Clear_1 = __importDefault(require("./utils/Clear"));
exports.Clear = Clear_1.default;
var Warn_1 = __importDefault(require("./utils/Warn"));
exports.Warn = Warn_1.default;
exports.default = Logs_1.default;
