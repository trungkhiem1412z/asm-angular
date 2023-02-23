import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../interface/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  // Khai báo
  products: Product[] = [];
  cateid: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}
  // Lấy tất cả sản phẩm theo loại
  ngOnInit() {
    this.getProductByCate();
  }
  // Lấy sản phẩm theo loại
  getProductByCate() {
    this.route.queryParamMap.subscribe((params) => {
      this.cateid = params.get('cateid');
      this.productService.getProductsByCate(this.cateid).subscribe((products) => {
        this.products = products;
      });
    });
  }
}
