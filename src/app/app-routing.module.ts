import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmCategoryComponent } from './components/admin/adm-category/adm-category.component';
import { AdmManageComponent } from './components/admin/adm-manage/adm-manage.component';
import { AdmProductsComponent } from './components/admin/adm-products/adm-products.component';
import { HomePageComponent } from './components/client/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: ClientLayoutComponent,
    children: [{ path: '', title: 'Trang chủ', component: HomePageComponent }],
  },
  { path: 'products', title: 'Sản phẩm', component: ClientLayoutComponent },
  {
    path: 'login',
    component: ClientLayoutComponent,
    children: [{ path: '', title: 'Đăng nhập', component: LoginComponent }],
  },
  {
    path: 'register',
    component: ClientLayoutComponent,
    children: [{ path: '', title: 'Đăng ký', component: RegisterComponent }],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', title: 'Admin Manager', component: AdmManageComponent },
      { path: 'products', title: 'Quản lý sản phẩm', component: AdmProductsComponent },
      { path: 'category', title: 'Quản lý danh mục', component: AdmCategoryComponent },
    ],
  },
  { path: '**', title: '404', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
