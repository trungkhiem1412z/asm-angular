import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interface/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000/categorys';
  private apiUrlCreate = 'http://localhost:3000/category/create';
  private apiUrlDetail = 'http://localhost:3000/category?idcate=';
  private apiUrDel = 'http://localhost:3000/category/del?idcate=';

  constructor(private http: HttpClient) {}

  // Lấy tất cả danh mục
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
  // Thêm danh mục
  addCategory(newCategory: Category): Observable<Category[]> {
    const options = { responseType: 'text' as 'json' };
    return this.http.post<Category[]>(this.apiUrlCreate, newCategory, options);
  }
  // Lấy chi tiết 1 danh mục
  getCategoryDetail(id: number): Observable<Category[]> {
    const cateDetail = this.apiUrlDetail + id;
    return this.http.get<Category[]>(cateDetail);
  }
  // Xoá danh mục
  delCategory(id: number) {
    const urlDel = this.apiUrDel + id;
    return this.http.delete(urlDel, { responseType: 'text' });
  }
}
