import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  newRole: string = '';
  roleList: string[] = [];
  isCategorySelected: Subscription;
  selectedCategory: Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.isCategorySelected = this.categoryService.getCategory().subscribe((res: Category) => {
      this.selectedCategory = res;
    })
  }

  addRole() {
    if (this.newRole.trim() !== '') {
      this.roleList.push(this.newRole);
      this.categoryService.setRoleList(this.roleList);
      this.newRole = '';
    }
  }

  removeRole(index: number) {
    this.roleList.splice(index, 1);
  }
}
