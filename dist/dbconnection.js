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
exports.default = connectToDatabase;
const mongoose_1 = __importDefault(require("mongoose"));
const loggers_1 = require("./loggers");
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbURI = process.env.DATABASE_URL || "";
            yield mongoose_1.default.connect(dbURI);
            (0, loggers_1.dbLogger)('Connected to DataBase');
        }
        catch (error) {
            console.log(error);
        }
    });
}
