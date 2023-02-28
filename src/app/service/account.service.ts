import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Interface
import { Account, Role } from '../interface/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  // Đăng ký tài khoản
  private createdAccount = 'http://localhost:3000/createuser';
  // Lấy tất cả các tài khoản
  private apiAllUser = 'http://localhost:3000/users';
  // Lấy tất cả các role
  private apiAllRole = 'http://localhost:3000/listrole';
  // Lấy thông tin Accout
  private apiUserInfo = 'http://localhost:3000/user?id=';
  // Chỉnh sửa tài khoản v2, admin
  private apiUpdateUserv2 = 'http://localhost:3000/updateuserv2?id=';
  // Xoá tài khoản
  private apidelAccount = 'http://localhost:3000/deleteuser?id=';

  constructor(private http: HttpClient) {}

  // Lấy tất cả tài khoản
  getAllAccount(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiAllUser);
  }
  // Đăng ký
  register(userName: string, password: string) {
    return this.http.post(this.createdAccount, { userName, password });
  }
  // Lấy thông tin Accout
  getUserInfo(id: number): Observable<Account> {
    const userInfo = this.apiUserInfo + id;
    return this.http.get<Account>(userInfo);
  }
  // Lấy thông tin Role
  getListRole(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiAllRole);
  }
  // Update thông tin tài khoản v2
  updateUserv2(id: number, user: Account): Observable<Account> {
    const apiUpdateUserv2 = this.apiUpdateUserv2 + id;
    return this.http.put<Account>(apiUpdateUserv2, user);
  }
  // Xoá tài khoản Account
  delAccount(id: number) {
    const apidelAccount = this.apidelAccount + id;
    return this.http.delete(apidelAccount);
  }
}
