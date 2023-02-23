import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Category } from '../../interface/category';
import { CategoryService } from '../../service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categories: Category[] = [];
  // Khai báo kiểu dữ liệu currentUser
  currentUser!: { username: string; role: string } | null;
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private categoryService: CategoryService,
    private router: Router
  ) {}
  // Lấy tất cả danh mục
  ngOnInit() {
    this.getAllCate();
    const dataUser = localStorage.getItem('user');
    this.currentUser = JSON.parse(dataUser!);
    if (this.currentUser?.role == null) {
      this.isLoggedIn = true;
    }
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
