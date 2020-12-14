import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Vegeterian Lasagna',
      'Really Tasty Vegetarian Lasagna',
      'https://www.lunchbox.eu/wp-content/uploads/2018/02/lasagna-piece-1.jpg'
    ),
    new Recipe(
      'Banitsa',
      'Bulgarian Banitsa - the best choice for quick and nutritious meal',
      'https://s.rozali.com/p/b/a/banica-206966-500x334.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  selectedRecipe(recipe: Recipe) {
    this.recipeEmitter.emit(recipe);
  }
}
