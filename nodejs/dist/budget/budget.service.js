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
exports.BudgetService = void 0;
const common_1 = require("@nestjs/common");
const update_budget_dto_1 = require("./dto/update-budget.dto");
const typeorm_1 = require("@nestjs/typeorm");
const budget_entity_1 = require("./entities/budget.entity");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("../categories/entities/category.entity");
let BudgetService = class BudgetService {
    constructor(budgetRepository, categoriesRepository) {
        this.budgetRepository = budgetRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async create(createBudgetDto) {
        const category = await this.categoriesRepository.findOneBy({
            name: createBudgetDto.category,
        });
        if (!category) {
            throw new common_1.BadRequestException('Category not found');
        }
        const budget = this.budgetRepository.create({
            amount: createBudgetDto.budgetAmount,
            month: createBudgetDto.month,
            category
        });
        return await this.budgetRepository.save(budget);
    }
    async findAll() {
        return await this.budgetRepository.find();
    }
    async findOne(id) {
        return await this.budgetRepository.findOneBy({ id });
    }
    async update(id, updateBudgetDto) {
        const budget = await this.categoriesRepository.findOneBy({ id });
        if (!budget_entity_1.Budget) {
            throw new common_1.BadRequestException('Budget not found');
        }
        let category;
        if (updateBudgetDto.category) {
            category = await this.categoriesRepository.findOneBy({
                name: updateBudgetDto.category,
            });
            if (!category) {
                throw new common_1.BadRequestException('category not found');
            }
        }
        return await this.budgetRepository.save({
            ...budget_entity_1.Budget,
            ...update_budget_dto_1.UpdateBudgetDto,
            category,
        });
    }
    async remove(id) {
        return await this.budgetRepository.softDelete(id);
    }
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(budget_entity_1.Budget)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BudgetService);
//# sourceMappingURL=budget.service.js.map