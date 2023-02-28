import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Account, Role } from '../../../interface/account';
import { AccountService } from '../../../service/account.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adm-account',
  templateUrl: './adm-account.component.html',
  styleUrls: ['./adm-account.component.scss'],
})
export class AdmAccountComponent implements OnInit {
  // Khai báo
  accounts: Account[] = [];
  // Khai báo list role
  listrole: Role[] = [];
  // Khai báo tài khoản chi tiết
  userInfo: Account | null = null;

  // Lấy các giá trị trong form Update
  @ViewChild('udtimgavt') udtimgavt!: ElementRef;
  @ViewChild('udtnameUser') udtnameUser!: ElementRef;
  @ViewChild('udtRoleUser') udtRoleUser!: ElementRef;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getAllAccounts();
    // Lấy tất cả Role
    this.getAllRole();
  }
  // Lấy tất cả tài khoản
  getAllAccounts() {
    this.accountService.getAllAccount().subscribe((accounts) => {
      this.accounts = accounts;
      // console.log(this.accounts);
    });
  }
  // Lấy tất cả các Role
  getAllRole() {
    this.accountService.getListRole().subscribe((listrole) => {
      this.listrole = listrole;
    });
  }
  // Lấy thông tin tài khoản
  getUserInfo(id: number) {
    this.accountService.getUserInfo(id).subscribe((data) => {
      this.userInfo = data;
      this.userInfo.roleid = this.userInfo.roleid?.toString();
      this.ngOnInit();
    });
  }
  // Update Account
  updateUserInfo(id: number | undefined, updateUserInfoValue: any) {
    const updateUser: Account = {
      img_avt: this.udtimgavt.nativeElement.value,
      fullName: this.udtnameUser.nativeElement.value,
      roleid: this.udtRoleUser.nativeElement.value,
    };
    this.accountService.updateUserv2(id!, updateUser).subscribe(
      (respone) => {
        console.log(respone);
        console.log(this.updateUserInfo);
        this.ngOnInit();
      },
      (error) => {
        console.log('Error: ', error.message);
      }
    );
  }
  // Xoá tài khoản
  delAccout(id: number) {
    this.accountService.delAccount(id).subscribe(
      (respone) => {
        console.log(respone);
        this.ngOnInit();
      },
      (error) => {
        console.log('Error', error.message);
      }
    );
  }
}
