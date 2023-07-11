import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private selectedCategory = new Subject<Category>();
  private roleList = new Subject<string[]>();

  constructor() { }

  setCategory(data: Category) {
    this.selectedCategory.next(data);
  }

  getCategory(): Observable<Category> {
    return this.selectedCategory.asObservable();
  }

  setRoleList(data: string[]) {
    this.roleList.next(data);
  }

  getRoleList(): Observable<string[]> {
    return this.roleList.asObservable();
  }

}
