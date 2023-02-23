import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../interface/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}
  // Khai báo
  products: Product[] = [];

  ngOnInit() {
    this.getAllProduct();
  }
  // Hàm lấy tất cả sản phẩm
  getAllProduct() {
    this.productService.getProducts().subscribe((products) => (this.products = products));
  }
}
