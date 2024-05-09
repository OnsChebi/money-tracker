"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUsersModule = void 0;
const common_1 = require("@nestjs/common");
const transactions_service_1 = require("./transactions.service");
const transactions_controller_1 = require("./transactions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const transaction_entity_1 = require("./entities/transaction.entity");
const categories_module_1 = require("../categories/categories.module");
const categories_service_1 = require("../categories/categories.service");
const category_entity_1 = require("../categories/entities/category.entity");
let TransactionUsersModule = class TransactionUsersModule {
};
exports.TransactionUsersModule = TransactionUsersModule;
exports.TransactionUsersModule = TransactionUsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([transaction_entity_1.TransactionUser, category_entity_1.Category]), categories_module_1.CategoriesModule],
        controllers: [transactions_controller_1.TransactionUsersController],
        providers: [transactions_service_1.TransactionUsersService, categories_service_1.CategoriesService],
    })
], TransactionUsersModule);
//# sourceMappingURL=transactions.module.js.map