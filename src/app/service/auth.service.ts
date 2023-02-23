import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrlAuth = 'http://localhost:3000/auth';
  private apiUrlLogout = 'http://localhost:3000/logout';
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<any>(this.apiUrlAuth, { userName: username, password: password }).pipe(
      map((response) => {
        // Lưu token trả về từ server trong local storage
        localStorage.setItem('access_token', response.token);
      })
    );
  }
  logout() {
    // Lấy token từ local storage
    const token = localStorage.getItem('access_token');
    // Gọi đến API authLogout để xóa token khỏi server
    this.http.post(this.apiUrlLogout, {}, { headers: { Authorization: `Bearer ${token}` } }).subscribe(() => {
      // Xóa token khỏi local storage
      localStorage.removeItem('access_token');
      // Điều hướng trở lại trang chủ
      this.router.navigate(['/home']);
    });
  }
  isLoggedIn() {
    // Kiểm tra xem token có tồn tại trong local storage hay không
    return localStorage.getItem('access_token') !== null;
  }
  getToken() {
    // Lấy token từ local storage
    return localStorage.getItem('access_token');
  }
}
