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
exports.TransactionUsersService = void 0;
const common_1 = require("@nestjs/common");
const update_transaction_dto_1 = require("./dto/update-transaction.dto");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transaction_entity_1 = require("./entities/transaction.entity");
const category_entity_1 = require("../categories/entities/category.entity");
let TransactionUsersService = class TransactionUsersService {
    constructor(transactionRepository, categoriesRepository) {
        this.transactionRepository = transactionRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async create(createTransactionUserDto) {
        const category = await this.categoriesRepository.findOneBy({
            name: createTransactionUserDto.category,
        });
        console.log(category);
        if (!category) {
            throw new common_1.BadRequestException('Category not found');
        }
        return await this.categoriesRepository.save({
            name: createTransactionUserDto.name,
            description: createTransactionUserDto.description,
            amount: createTransactionUserDto.amount,
            date: createTransactionUserDto.date,
            category: category.id
        });
    }
    async findAll() {
        console.log(this.transactionRepository.createQueryBuilder('transaction').getSql());
        return await this.transactionRepository.find();
    }
    async findOne(id) {
        return await this.transactionRepository.findOneBy({ id });
    }
    async update(id, updateTransactionUserDto) {
        const transaction = await this.categoriesRepository.findOneBy({ id });
        if (!transaction) {
            throw new common_1.BadRequestException('transaction not found');
        }
        let category;
        if (updateTransactionUserDto.category) {
            category = await this.categoriesRepository.findOneBy({
                name: updateTransactionUserDto.category,
            });
            if (!category) {
                throw new common_1.BadRequestException('category not found');
            }
        }
        return await this.transactionRepository.save({
            ...transaction,
            ...update_transaction_dto_1.UpdateTransactionUserDto,
            category,
        });
    }
    async remove(id) {
        return await this.transactionRepository.softDelete(id);
    }
};
exports.TransactionUsersService = TransactionUsersService;
exports.TransactionUsersService = TransactionUsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.TransactionUser)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TransactionUsersService);
//# sourceMappingURL=transactions.service.js.map