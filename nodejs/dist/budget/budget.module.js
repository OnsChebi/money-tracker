"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const budget_entity_1 = require("./entities/budget.entity");
const budget_controller_1 = require("./budget.controller");
const budget_service_1 = require("./budget.service");
const transactions_module_1 = require("../transactions/transactions.module");
const category_entity_1 = require("../categories/entities/category.entity");
let BudgetsModule = class BudgetsModule {
};
exports.BudgetsModule = BudgetsModule;
exports.BudgetsModule = BudgetsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([budget_entity_1.Budget, category_entity_1.Category]),
            (0, common_1.forwardRef)(() => transactions_module_1.TransactionsModule),
        ],
        providers: [budget_service_1.BudgetsService],
        controllers: [budget_controller_1.BudgetsController],
        exports: [budget_service_1.BudgetsService],
    })
], BudgetsModule);
//# sourceMappingURL=budget.module.js.map