import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
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
  { path: 'admin', title: 'Admin', component: AdminLayoutComponent },
  { path: '**', title: '404', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
