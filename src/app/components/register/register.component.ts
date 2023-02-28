import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup | any;

  constructor(private accountService: AccountService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        userName: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      {
        validator: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const passwordControl = form.get('password');
    const confirmPasswordControl = form.get('confirmPassword');
    if (passwordControl?.value !== confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl?.setErrors(null);
    }
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    const userName = this.registerForm.get('userName')?.value;
    const password = this.registerForm.get('password')?.value;
    this.accountService.register(userName, password).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }
}
