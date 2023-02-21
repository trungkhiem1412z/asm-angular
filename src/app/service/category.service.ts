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
  private apiUrlDel = 'http://localhost:3000/category/del?idcate=';
  private apiUrlUpdate = 'http://localhost:3000/category/update?idcate=';

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
  // Lấy 1 đối tượng của Category
  getCategoryDetail(id: number): Observable<Category> {
    const cateDetail = this.apiUrlDetail + id;
    return this.http.get<Category>(cateDetail);
  }
  // Update chi tiết danh mục
  updateCateById(idCate: number, category: Category): Observable<Category> {
    const apiUrlUpdateDetail = this.apiUrlUpdate + idCate;
    return this.http.put<Category>(apiUrlUpdateDetail, category);
  }
  // Xoá danh mục
  delCategory(id: number) {
    const urlDel = this.apiUrlDel + id;
    return this.http.delete(urlDel, { responseType: 'text' });
  }
}
