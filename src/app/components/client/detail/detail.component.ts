import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../interface/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  // Khai báo
  products: Product[] = [];
  id: any;
  // Khai báo sản phẩm chi tiết
  prodDetail: Product | null = null;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  // Lấy tất cả sản phẩm chi tiết
  ngOnInit() {
    // this.getProductDetailById();
    this.route.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
      this.productService.getProductDetail(this.id).subscribe((data) => {
        this.prodDetail = data;
        this.prodDetail.idCateProduct = this.prodDetail.idCateProduct?.toString();
        // console.log(`Detail: ${JSON.stringify(this.prodDetail)}`);
        // this.ngOnInit();
      });
    });
  }
  // Lấy sản phẩm chi tiết
  // getProductDetailById() {
  //   this.route.queryParamMap.subscribe((params) => {
  //     this.id = params.get('id');
  //     this.productService.getProductDetail(this.id).subscribe((data) => {
  //       this.prodDetail = data;
  //       this.prodDetail.idCateProduct = this.prodDetail.idCateProduct?.toString();
  //       // console.log(`Detail: ${JSON.stringify(this.prodDetail)}`);
  //       this.ngOnInit();
  //     });
  //   });
  // }
}
