import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Category } from '../../interface/category';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categories: Category[] = [];

  constructor(private authService: AuthService, private categoryService: CategoryService) {}
  // Lấy tất cả danh mục
  ngOnInit() {
    this.getAllCate();
  }
  // Lấy tất cả danh mục
  getAllCate() {
    this.categoryService.getCategories().subscribe((categories) => (this.categories = categories));
  }
  // Đăng xuất
  logout() {
    this.authService.logout();
  }
}
