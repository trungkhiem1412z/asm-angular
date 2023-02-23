import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-manage',
  templateUrl: './adm-manage.component.html',
  styleUrls: ['./adm-manage.component.scss'],
})
export class AdmManageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }
}
