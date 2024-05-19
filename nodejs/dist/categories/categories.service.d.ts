import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Budget } from 'src/bugdet/entities/budget.entity';
export declare class CategoriesService {
    private readonly categoriesRepository;
    private readonly budgetRepository;
    constructor(categoriesRepository: Repository<Category>, budgetRepository: Repository<Budget>);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
