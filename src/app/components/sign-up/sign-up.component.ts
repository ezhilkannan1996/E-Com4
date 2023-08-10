import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  signUp(): void {
    const newUser = {
      username: this.username,
      password: this.password
    };
    this.userService.signUp(newUser);
    // Optionally, navigate to the login page after successful sign-up
  }
}
