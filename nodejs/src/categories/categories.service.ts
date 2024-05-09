import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category} from './entities/category.entity';

@Injectable()
export class CategoriesService {

constructor(
  @InjectRepository(Category)
  private readonly categoriesRepository:Repository<Category>)
{}
  async create(createCategoryDto: CreateCategoryDto) {
    const category=this.categoriesRepository.create(createCategoryDto);
    return await this.categoriesRepository.save(category);
  }

  async findAll() {
    return await this.categoriesRepository.find({relations:({transactions:true})});
  }

  async findOne(id: number) {
    return await this.categoriesRepository.findOneBy({id});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoriesRepository.update(id,updateCategoryDto);
  }

  async remove(id: number) {
    return await this.categoriesRepository.softDelete(id);
  }
}
