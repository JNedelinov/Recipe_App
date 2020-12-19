import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable()
export class ShoppingListService {
  // ingredients: Ingredient[] = [
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];

  slEmitter: EventEmitter<Ingredient[]> = new EventEmitter();

  // * Max's method of getting the data
  get allIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addToShoppingList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.slEmitter.emit(this.allIngredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      this.ingredients.push(ingredient);
    });
    this.slEmitter.emit(this.allIngredients);
  }
}
