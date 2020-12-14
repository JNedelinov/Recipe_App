import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.template.html',
  styleUrls: ['./recipes.styles.css'],
})
export class RecipesComponent {
  title: string = 'Recipes Component';
  constructor() {}
}
