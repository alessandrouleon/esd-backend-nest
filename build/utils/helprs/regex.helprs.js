"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegExHelper = void 0;
const password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const stringWithoutSpecialCharacters = /^[\p{L}\s]+$/u;
exports.RegExHelper = {
    password,
    dateFormat,
    emailFormat,
    stringWithoutSpecialCharacters,
};
//# sourceMappingURL=regex.helprs.js.map