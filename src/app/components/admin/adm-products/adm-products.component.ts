import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../interface/category';
import { Product } from '../../../interface/product';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adm-products',
  templateUrl: './adm-products.component.html',
  styleUrls: ['./adm-products.component.scss'],
})
export class AdmProductsComponent implements OnInit {
  // Khai báo
  products: Product[] = [];
  // Khai bảo kiểu dữ liệu thêm sản phẩm
  newProduct: Product = {
    nameProduct: '',
    idCateProduct: 0,
    priceProduct: 0,
    description: '',
    image_url: '',
  };
  // Khai báo sản phẩm chi tiết
  prodDetail: Product | null = null;
  // Khai báo danh mục
  categories: Category[] = [];
  //
  updatedProdDetail: Product = {
    nameProduct: '',
    idCateProduct: 0,
    priceProduct: 0,
    description: '',
    image_url: '',
  };
  // Lấy các giá trị value trong form Update
  @ViewChild('udtnameProd') udtnameProd!: ElementRef;
  @ViewChild('udtcateProd') udtcateProd!: ElementRef;
  @ViewChild('udtpriceProd') udtpriceProd!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  @ViewChild('image_url') image_url!: ElementRef;
  //
  constructor(private productService: ProductService, private categoryService: CategoryService) {}

  // Lấy tất cả sản phẩm
  ngOnInit() {
    this.getAllProduct();
    this.getAllCate();
    // Đặt giá trị mặc định cho selected tạo sản phẩm
    this.newProduct.idCateProduct = 'Chọn loại';
  }
  // Hàm lấy tất cả sản phẩm
  getAllProduct() {
    this.productService.getProducts().subscribe((products) => (this.products = products));
  }
  // Lấy tất cả danh mục
  getAllCate() {
    this.categoryService.getCategories().subscribe((categories) => (this.categories = categories));
  }
  // Lấy sản phẩm chi tiết
  getProductDetailById(id: number) {
    this.productService.getProductDetail(id).subscribe((data) => {
      this.prodDetail = data;
      this.prodDetail.idCateProduct = this.prodDetail.idCateProduct?.toString();
      console.log(`Detail: ${JSON.stringify(this.prodDetail)}`);
      this.ngOnInit();
    });
  }
  // Thêm sản phẩm
  addProduct() {
    this.newProduct.idCateProduct = Number(this.newProduct.idCateProduct);
    this.productService.addProduct(this.newProduct).subscribe((response) => {
      console.log(response);
      this.newProduct = {
        nameProduct: '',
        idCateProduct: this.newProduct.idCateProduct,
        priceProduct: 0,
        description: '',
        image_url: '',
      };
      this.ngOnInit();
    });
  }
  // Update sản phẩm
  updatedProd(id: number | undefined, updateProdFormValue: any) {
    const updatedProdDetail: Product = {
      nameProduct: this.udtnameProd.nativeElement.value,
      idCateProduct: this.udtcateProd.nativeElement.value,
      priceProduct: this.udtpriceProd.nativeElement.value,
      description: this.description.nativeElement.value,
      image_url: this.image_url.nativeElement.value,
    };
    this.productService.updateProdById(id!, updatedProdDetail).subscribe(
      (response) => {
        console.log(response);
        console.log(this.updatedProd);
        this.ngOnInit();
      },
      (error) => {
        console.log('Error:', error.message);
      }
    );
  }
  // Xoá sản phẩm
  delProdById(id: number) {
    this.productService.delProd(id).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
      },
      (error) => {
        console.log('Error:', error.message);
      }
    );
  }
}
