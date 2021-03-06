import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shpListService: ShoppingListService) {}

  ngOnInit(): void {
    // this.ingredients = this.shpListService.ingredients;
    this.ingredients = this.shpListService.allIngredients;
    this.shpListService.slEmitter.subscribe((list) => {
      this.ingredients = list;
    });
  }
}
