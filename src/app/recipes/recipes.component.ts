import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.template.html',
  styleUrls: ['./recipes.styles.css'],
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  
  constructor() {}
}
