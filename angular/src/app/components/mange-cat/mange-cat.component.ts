import { Component } from '@angular/core';
import { Category } from '../../models/Category';
import { CatServiceService } from '../../services/cat-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mange-cat',
  templateUrl: './mange-cat.component.html',
  styleUrl: './mange-cat.component.css'
})
export class MangeCatComponent {
  // selectedCategory: Category;
  // categoryUpdate: Category; // No direct initialization here

  constructor(private catService: CatServiceService, private activatedRoute: ActivatedRoute) {}

  // ngOnInit() {
  //   this.activatedRoute.paramMap.subscribe({
  //     next: (value) => {
  //       this.categoryUpdate = this.catService.getCategoryById(value.get('id'));
  //     },
  //   });_
  // }

  onSubmit(updateCat: Category) {
    this.catService.updateCat(updateCat);
  }

  // Delete() {
  //   if (confirm('Are you sure ?')) {
  //     this.catService.deleteCat(this.selectedCategory.id);
  //   }
  // }
}
