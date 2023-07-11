import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {

  isCategorySelected: Subscription;
  isRoleListUpdated: Subscription;
  selectedCategory: Category;
  roleList: string[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.isCategorySelected = this.categoryService.getCategory().subscribe((res: Category) => {
      this.selectedCategory = res;
    });
    this.isRoleListUpdated = this.categoryService.getRoleList().subscribe((resp) => {
      this.roleList = resp;
    })
  }

  getFilteredSubCategory() {
    if (this.selectedCategory.subCategory.length > 0 && this.roleList.length > 0) {
      const filteredArray = this.selectedCategory.subCategory.filter(element => this.roleList.includes(element.role));
      return filteredArray.length > 0 ? this.selectedCategory.subCategory : [];
    }
  }

}
