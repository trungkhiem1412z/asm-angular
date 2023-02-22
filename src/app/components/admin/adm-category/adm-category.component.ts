import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import { Category, UpdatedCategory } from '../../../interface/category';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adm-category',
  templateUrl: './adm-category.component.html',
  styleUrls: ['./adm-category.component.scss'],
})
export class AdmCategoryComponent implements OnInit {
  // Lấy 2 giá trị value trong form Update
  @ViewChild('udtnameCate') udtnameCate!: ElementRef;
  @ViewChild('udturlCate') udturlCate!: ElementRef;
  //
  categories: Category[] = [];
  // Khai báo giá trị ban đầu cateDetail là Null
  cateDetail: Category | null = null;
  newCategory: Category = { nameCate: '', urlCate: '' };
  selectedCategoryId!: number;

  updatedCategoryDetail: UpdatedCategory = {
    nameCate: '',
    urlCate: '',
  };

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
      // console.log(`Detail: ${JSON.stringify(this.cateDetail)}`);
      this.ngOnInit();
    });
  }
  // Update danh mục
  updatedCategory(idCate: number | undefined, updateCateFormValue: any) {
    const updatedCategoryDetail: UpdatedCategory = {
      nameCate: this.udtnameCate.nativeElement.value,
      urlCate: this.udturlCate.nativeElement.value,
    };
    this.categoryService.updateCateById(idCate!, updatedCategoryDetail).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
      },
      (error) => {
        console.log('Error:', error.message);
      }
    );
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
