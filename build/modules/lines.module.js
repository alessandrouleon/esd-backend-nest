"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinesModule = void 0;
const common_1 = require("@nestjs/common");
const lists_lines_service_1 = require("../services/lines/lists.lines.service");
const lines_controller_1 = require("../controllers/lines.controller");
const lines_repository_1 = require("../repositories/lines/lines.repository");
const update_lines_service_1 = require("../services/lines/update.lines.service");
const create_lines_service_1 = require("../services/lines/create.lines.service");
const delete_lines_service_1 = require("../services/lines/delete.lines.service");
let LinesModule = class LinesModule {
};
exports.LinesModule = LinesModule;
exports.LinesModule = LinesModule = __decorate([
    (0, common_1.Module)({
        controllers: [lines_controller_1.LinesController],
        exports: [
            create_lines_service_1.CreateLinesService,
            update_lines_service_1.UpdateLinesService,
            delete_lines_service_1.DeleteLinesService,
            lists_lines_service_1.ListsLinesService,
        ],
        providers: [
            create_lines_service_1.CreateLinesService,
            update_lines_service_1.UpdateLinesService,
            delete_lines_service_1.DeleteLinesService,
            lists_lines_service_1.ListsLinesService,
            {
                provide: 'ILinesRepository',
                useClass: lines_repository_1.LinesRepository,
            },
        ],
    })
], LinesModule);
//# sourceMappingURL=lines.module.js.map