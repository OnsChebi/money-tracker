"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBudgetDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bugdet_dto_1 = require("./create-bugdet.dto");
class UpdateBudgetDto extends (0, mapped_types_1.PartialType)(create_bugdet_dto_1.CreateBudgetDto) {
}
exports.UpdateBudgetDto = UpdateBudgetDto;
//# sourceMappingURL=update-bugdet.dto.js.map