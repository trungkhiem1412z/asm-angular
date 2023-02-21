import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../interface/category';

@Component({
  selector: 'app-adm-category',
  templateUrl: './adm-category.component.html',
  styleUrls: ['./adm-category.component.scss'],
})
export class AdmCategoryComponent implements OnInit {
  categories: Category[] = [];
  cateDetail: Category[] = [];
  newCategory: Category = { nameCate: '', urlCate: '' };

  constructor(private categoryService: CategoryService) {}
  // Lấy tất cả danh mục
  ngOnInit() {
    // this.categoryService.getCategories().subscribe((categories) => (this.categories = categories));
    this.getAllCate();
  }
  // Lấy tất cả danh mục
  getAllCate() {
    this.categoryService.getCategories().subscribe((categories) => (this.categories = categories));
  }
  // Thêm danh mục mới
  addCate() {
    this.categoryService.addCategory(this.newCategory).subscribe((response) => {
      console.log(response);
      this.newCategory = { nameCate: '', urlCate: '' };
      this.ngOnInit();
    });
  }
  // Lấy danh mục chi tiết
  getCateDetailById(idCate: number) {
    this.categoryService.getCategoryDetail(idCate).subscribe((data) => {
      this.cateDetail = data;
      console.log(`Detail: ${JSON.stringify(this.cateDetail)}`);
    });
  }
  // Xoá danh mục
  delCateById(idCate: number) {
    this.categoryService.delCategory(idCate).subscribe(
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
