import { Component } from '@angular/core';

interface SubCategory {
  label: string;
  role: string;
}

interface Category {
  category: string;
  subCategory: SubCategory[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'industryApps';

  selectedCategory: Category;
  newRole: string = '';
  roleList: string[] = [];


  categories: Category[] = [
    { "category": "Dashboard", "subCategory": [{ "label": "SOP", "role": "SOP_A_VIEW" }, { "label": "SOP-V2", "role": "SOP_A_V2" }, { "label": "QSOP", "role": "QSOP_V_VIEW" }] },
    { "category": "User", "subCategory": [{ "label": "Add User", "role": "USR_M_ADD" }, { "label": "Edit User", "role": "USR_M_ADD" }, { "label": "Delete User", "role": "USR_D" }] },
    { "category": "Master", "subCategory": [{ "label": "Shift Master", "role": "SHIFT_M_ADD" }, { "label": "Machine", "role": "MACHN_M_VIEW" }, { "label": "Component Master", "role": "COMP_M_VIEW" }] },
    { "category": "Test", "subCategory": [{ "label": "Test", "role": "TEST_M_ADD" }] }];


  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.roleList = [];
  }

  addRole() {
    if (this.newRole.trim() !== '') {
      this.roleList.push(this.newRole);
      this.newRole = '';
    }
  }

  isRoleAdded(role: string): boolean {
    return this.roleList.includes(role);
  }

  getFilteredSubCategory(): SubCategory[] {
    if (this.selectedCategory.subCategory.length > 0 && this.roleList.length > 0) {
      let array = this.selectedCategory.subCategory.filter(element => {
        if (this.roleList.includes(element.role)) {
          return element;
        }
      });
      if (array.length > 0) {
        return this.selectedCategory.subCategory;
      } else {
        return [];
      }
    }
  }

  removeRole(index: number) {
    this.roleList.splice(index, 1);
  }
}
