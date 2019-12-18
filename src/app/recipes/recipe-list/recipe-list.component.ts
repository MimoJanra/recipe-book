import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'Test Description', 'https://klopotenko.com/wp-content/uploads/2018/03/jajca-benedikt_siteWeb.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
