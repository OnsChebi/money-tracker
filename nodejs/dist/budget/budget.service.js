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
exports.BudgetsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const budget_entity_1 = require("./entities/budget.entity");
const category_entity_1 = require("../categories/entities/category.entity");
let BudgetsService = class BudgetsService {
    constructor(budgetsRepository, categoriesRepository) {
        this.budgetsRepository = budgetsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async create(createBudgetDto, userId) {
        const category = await this.categoriesRepository.findOne({ where: { name: createBudgetDto.category } });
        if (!category) {
            throw new common_1.BadRequestException('Category not found');
        }
        const existingBudget = await this.budgetsRepository.findOne({
            where: {
                month: createBudgetDto.month,
                category: { id: category.id },
                user: { id: userId },
            },
        });
        if (existingBudget) {
            throw new common_1.BadRequestException('Budget for this category already exists for the given month');
        }
        const budget = this.budgetsRepository.create({
            ...createBudgetDto,
            category,
            user: { id: userId },
        });
        return this.budgetsRepository.save(budget);
    }
    async findAll(userId) {
        return this.budgetsRepository.find({ where: { user: { id: userId } } });
    }
    async findOne(id, userId) {
        const budget = await this.budgetsRepository.findOne({ where: { id, user: { id: userId } } });
        if (!budget) {
            throw new common_1.NotFoundException(`Budget #${id} not found`);
        }
        return budget;
    }
    async update(id, updateBudgetDto, userId) {
        const budget = await this.findOne(id, userId);
        if (updateBudgetDto.category) {
            const category = await this.categoriesRepository.findOne({ where: { name: updateBudgetDto.category } });
            if (!category) {
                throw new common_1.BadRequestException('Category not found');
            }
            budget.category = category;
        }
        Object.assign(budget, updateBudgetDto);
        return this.budgetsRepository.save(budget);
    }
    async remove(id, userId) {
        const budget = await this.findOne(id, userId);
        return this.budgetsRepository.remove(budget);
    }
};
exports.BudgetsService = BudgetsService;
exports.BudgetsService = BudgetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(budget_entity_1.Budget)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BudgetsService);
//# sourceMappingURL=budget.service.js.map