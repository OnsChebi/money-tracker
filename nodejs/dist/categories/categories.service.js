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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./entities/category.entity");
const bugdet_entity_1 = require("../bugdet/entities/bugdet.entity");
let CategoriesService = class CategoriesService {
    constructor(categoriesRepository, budgetRepository) {
        this.categoriesRepository = categoriesRepository;
        this.budgetRepository = budgetRepository;
    }
    async create(createCategoryDto) {
        const { name, budgetAmount } = createCategoryDto;
        const category = this.categoriesRepository.create({ name });
        await this.categoriesRepository.save(category);
        const budget = this.budgetRepository.create({ amount: budgetAmount, category });
        await this.budgetRepository.save(budget);
        category.budget = budget;
        return this.categoriesRepository.save(category);
    }
    async findAll() {
        return await this.categoriesRepository.find({ relations: ['budget', 'transactions'] });
    }
    async findOne(id) {
        return await this.categoriesRepository.findOne({ where: { id }, relations: ['budget', 'transactions'] });
    }
    async update(id, updateCategoryDto) {
        const category = await this.categoriesRepository.findOne({ where: { id }, relations: ['budget'] });
        if (!category) {
            throw new Error('Category not found');
        }
        const { name, budgetAmount } = updateCategoryDto;
        if (name)
            category.name = name;
        if (budgetAmount !== undefined) {
            if (category.budget) {
                category.budget.amount = budgetAmount;
                await this.budgetRepository.save(category.budget);
            }
            else {
                const budget = this.budgetRepository.create({ amount: budgetAmount, category });
                await this.budgetRepository.save(budget);
                category.budget = budget;
            }
        }
        return this.categoriesRepository.save(category);
    }
    async remove(id) {
        return await this.categoriesRepository.softDelete(id);
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __param(1, (0, typeorm_1.InjectRepository)(bugdet_entity_1.Budget)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map