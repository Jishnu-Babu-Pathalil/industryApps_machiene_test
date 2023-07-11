import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  selectedCategory: Category;

  constructor(
    private httpClient: HttpClient,
    private categoryService: CategoryService
  ) {
    this.loadCategories();
  }

  ngOnInit(): void { }

  loadCategories() {
    this.httpClient.get('assets/categories.json').subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.categoryService.setCategory(this.selectedCategory);
  }

}
