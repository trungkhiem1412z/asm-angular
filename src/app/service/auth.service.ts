import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrlAuth = 'http://localhost:3000/auth';
  private apiUrlLogout = 'http://localhost:3000/logout';

  // Khai báo kiểu dữ liệu currentUser
  currentUser!: { username: string; role: string } | null;

  constructor(private http: HttpClient, private router: Router) {}

  // Login
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrlAuth, { userName: username, password: password }).pipe(
      map((response) => {
        if (response && response.token) {
          // Lưu token trả về từ server trong local storage
          localStorage.setItem('access_token', response.token);
          // Lấy thông tin User
          this.currentUser = {
            username: response.username,
            role: response.role,
          };
          // Lưu thông tin User vào Local storage
          localStorage.setItem('user', JSON.stringify(this.currentUser));
          return response;
        } else {
          // Nếu response không hợp lệ hoặc không có token, trả về thông tin lỗi
          throw new Error('Invalid response from server');
        }
      }),
      catchError((error) => {
        // Xử lý các lỗi xảy ra khi gửi yêu cầu đăng nhập đến server
        console.log(error);
        return throwError('Unable to login. Please try again later.');
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
      // Xoá thông tin User trong Local Storage
      localStorage.removeItem('user');
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

  // Lấy thông tin user hiện tại
  getCurrentUser() {
    const dataUser = localStorage.getItem('user');
    this.currentUser = JSON.parse(dataUser!);
    return this.currentUser;
  }
}
