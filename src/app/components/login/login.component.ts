import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userName!: string;
  password!: string;
  errorMessage!: string;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.userName, this.password).subscribe(
      () => {
        this.router.navigate(['/admin']);
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
