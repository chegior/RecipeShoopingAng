import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Tacos','This is an special on the house, carnitas tacos','http://res.cloudinary.com/hksqkdlah/image/upload/v1481141685/29171_sfs-classic-beef-tacos-10.jpg',
    ),new Recipe('Costillas','this are ribs sesoned is with a traditional west sauce','https://spicysouthernkitchen.com/wp-content/uploads/slow-cooker-ribs-6.jpg'
    ) 
  ];//recipe of arrays of Recipes Objects define in the MODEL ../recipe/model
  constructor() { }

  ngOnInit() {
  }

}
