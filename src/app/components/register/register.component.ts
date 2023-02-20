import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  userName!: string;
  password!: string;

  constructor(private registerService: RegisterService) {}

  register() {
    this.registerService.register(this.userName, this.password).subscribe((result) => {
      console.log(result);
    });
  }
}
