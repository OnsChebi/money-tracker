import { Injectable } from '@angular/core';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {
  private categories:Category[]=[
   new Category(1,'airplanemode_active','traveling'),
   new Category (2,'shopping_cart','shopping'),
   new Category(3,'settings_cell','phone'),
   new Category(4,'add_circle','medical'),
   new Category (5,'monetization_on','piggy_pank'),
   new Category(6,'directions_bus','transport'),
   new Category (7,'local_dining','food') 
  ]

getCategories(){
  return this.categories;
}

getCategoryById(_id: number){
  return this.categories.find((cat)=>cat.id==_id);
}

addCategory(newCat: Category){
  newCat.id=this.categories[this.categories.length-1].id+1;
  this.categories.push(newCat);
}
updateCat(_updatedCat: Category){
  let i = this.categories.findIndex((cat)=>cat.id==_updatedCat.id);
  this.categories[i]=_updatedCat;
}

  constructor() {}
  deleteCat(_id: number){
    let i =this.categories.findIndex((cat)=>cat.id==i);
    this.categories.splice(i,1);
  }
}
