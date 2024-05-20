"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetsController = void 0;
const common_1 = require("@nestjs/common");
const create_budget_dto_1 = require("./dto/create-budget.dto");
const update_budget_dto_1 = require("./dto/update-budget.dto");
const budget_service_1 = require("./budget.service");
let BudgetsController = class BudgetsController {
    constructor(budgetsService) {
        this.budgetsService = budgetsService;
    }
    create(createBudgetDto, req) {
        const userId = req.user.id;
        return this.budgetsService.create(createBudgetDto, userId);
    }
    findAll(req) {
        const userId = req.user.id;
        return this.budgetsService.findAll(userId);
    }
    findOne(id, req) {
        const userId = req.user.id;
        return this.budgetsService.findOne(id, userId);
    }
    update(id, updateBudgetDto, req) {
        const userId = req.user.id;
        return this.budgetsService.update(id, updateBudgetDto, userId);
    }
    remove(id, req) {
        const userId = req.user.id;
        return this.budgetsService.remove(id, userId);
    }
};
exports.BudgetsController = BudgetsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_budget_dto_1.CreateBudgetDto, Object]),
    __metadata("design:returntype", void 0)
], BudgetsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BudgetsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BudgetsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_budget_dto_1.UpdateBudgetDto, Object]),
    __metadata("design:returntype", void 0)
], BudgetsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BudgetsController.prototype, "remove", null);
exports.BudgetsController = BudgetsController = __decorate([
    (0, common_1.Controller)('budgets'),
    __metadata("design:paramtypes", [budget_service_1.BudgetsService])
], BudgetsController);
//# sourceMappingURL=budget.controller.js.map