"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLinesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_lines_dto_1 = require("./create-lines.dto");
class UpdateLinesDto extends (0, mapped_types_1.PartialType)(create_lines_dto_1.CreateLinesDto) {
}
exports.UpdateLinesDto = UpdateLinesDto;
//# sourceMappingURL=update-lines.dto.js.map