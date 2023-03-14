import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Test Recipe', 
          'Test Desc', 
          'https://delicerecipes.com/wp-content/uploads/2020/07/Marbled-beef-meat-5.jpg', 
          [
            new Ingredient('Meat', 1),
            new Ingredient('Garlic', 1)
          ]),
        new Recipe(
          'Test Recipe 2', 
          'Test Desc 2', 
          'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg', 
          [
            new Ingredient('Spaghetti', 1),
            new Ingredient('Tomato', 3)
          ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}