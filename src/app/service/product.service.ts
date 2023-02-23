import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Lấy all sản phẩm
  private apiUrl = 'http://localhost:3000/products';
  // Lấy sản phẩm theo loại
  private apiUrlProdCate = 'http://localhost:3000/product/cate?cateid=';
  // Tạo sản phẩm
  private apiUrlCreate = 'http://localhost:3000/product/create';
  // Sửa sản phẩm
  private apiUrlUpdate = 'http://localhost:3000/product/update?id=';
  // Lấy sản phẩm chi tiết
  private apiUrlDetail = 'http://localhost:3000/product?id=';
  // Xoá sản phẩm
  private apiUrlDel = 'http://localhost:3000/product/del?id=';

  constructor(private http: HttpClient) {}

  // Lấy tất cả sản phẩm
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  // Lấy sản phẩm theo danh mục
  getProductsByCate(cateid: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrlProdCate + cateid);
  }
  // Tạo sản phẩm
  addProduct(newProduct: Product): Observable<Product[]> {
    const options = { responseType: 'text' as 'json' };
    return this.http.post<Product[]>(this.apiUrlCreate, newProduct, options);
  }
  // Lấy chi tiết sản phẩm
  getProductDetail(id: number): Observable<Product> {
    const prodDetail = this.apiUrlDetail + id;
    return this.http.get<Product>(prodDetail);
  }
  // Cập nhật sản phẩm
  updateProdById(id: number, product: Product): Observable<Product> {
    const apiUrlUpdate = this.apiUrlUpdate + id;
    return this.http.put<Product>(apiUrlUpdate, product);
  }
  // Xoá sản phẩm
  delProd(id: number) {
    const urlDel = this.apiUrlDel + id;
    return this.http.delete(urlDel, { responseType: 'text' });
  }
}
