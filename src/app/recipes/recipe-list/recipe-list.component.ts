import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Vegeterian Lasagna',
      'Really Tasty Vegetarian Lasagna',
      'https://www.lunchbox.eu/wp-content/uploads/2018/02/lasagna-piece-1.jpg',
    ),
    new Recipe(
      'Vegeterian Lasagna',
      'Really Tasty Vegetarian Lasagna',
      'https://www.lunchbox.eu/wp-content/uploads/2018/02/lasagna-piece-1.jpg',
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
