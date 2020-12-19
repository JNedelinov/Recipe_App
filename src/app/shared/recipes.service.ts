import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [
  // private recipes: Recipe[] = [
    new Recipe(
      'Vegeterian Lasagna',
      'Really Tasty Vegetarian Lasagna',
      'https://www.lunchbox.eu/wp-content/uploads/2018/02/lasagna-piece-1.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Banitsa',
      'Bulgarian Banitsa - the best choice for quick and nutritious meal',
      'https://s.rozali.com/p/b/a/banica-206966-500x334.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
  ];

  selectedRecipe: Recipe;

  recipeEmitter: EventEmitter<Recipe> = new EventEmitter();

  // * Max's Method of getting the data
  // get allRecipes(): Recipe[] {
  //   return this.recipes.slice();
  // }

  onSelectedRecipe(id: number) {
    this.selectedRecipe = this.recipes[id];
    this.recipeEmitter.emit(this.selectedRecipe);
  }
}
