import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/client/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdmManageComponent } from './components/admin/adm-manage/adm-manage.component';
import { AdmCategoryComponent } from './components/admin/adm-category/adm-category.component';
import { AdmProductsComponent } from './components/admin/adm-products/adm-products.component';
import { CategoriesComponent } from './components/client/categories/categories.component';
import { ProductsComponent } from './components/client/products/products.component';
import { DetailComponent } from './components/client/detail/detail.component';
import { CurrencySuffixPipe } from './pipe/currency-suffix.pipe';
import { AdmAccountComponent } from './components/admin/adm-account/adm-account.component';
import { ListCateComponent } from './components/client/list-cate/list-cate.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    AdmManageComponent,
    AdmCategoryComponent,
    AdmProductsComponent,
    CategoriesComponent,
    ProductsComponent,
    DetailComponent,
    CurrencySuffixPipe,
    AdmAccountComponent,
    ListCateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
