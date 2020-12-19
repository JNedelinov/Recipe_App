import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/shared/recipes.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.recipes;
    // this.recipes = this.recipesService.allRecipes;
  }

  selectedRecipe(id: number) {
    this.recipesService.onSelectedRecipe(id);
  }
}
