import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Desc', 'https://delicerecipes.com/wp-content/uploads/2020/07/Marbled-beef-meat-5.jpg')
  ];

  constructor() {}

  ngOnInit() {

  }

}
