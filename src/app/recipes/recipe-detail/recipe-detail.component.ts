import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipesService } from 'src/app/shared/recipes.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private recipesService: RecipesService,
    private shpListService: ShoppingListService
  ) {
    this.recipesService.recipeEmitter.subscribe(
      (selectedRecipe) => (this.recipe = selectedRecipe)
    );
    this.recipe = this.recipesService.selectedRecipe;
  }

  ngOnInit(): void {}

  addIngredients(ingredients: Ingredient[]) {
    this.shpListService.addIngredients(ingredients);
  }
}
