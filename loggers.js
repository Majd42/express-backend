"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceLogger = exports.middlewareLogger = exports.controllerLogger = exports.modelLogger = exports.routeLogger = exports.dbLogger = void 0;
const debug_1 = __importDefault(require("debug"));
exports.dbLogger = (0, debug_1.default)('app:db');
exports.routeLogger = (0, debug_1.default)('app:route');
exports.modelLogger = (0, debug_1.default)("app:model");
exports.controllerLogger = (0, debug_1.default)("app:controller");
exports.middlewareLogger = (0, debug_1.default)("app:middleware");
exports.serviceLogger = (0, debug_1.default)("app:service");
