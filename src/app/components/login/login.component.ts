import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  loginError: boolean = false;
  loginform: FormGroup; 
  wrongPassword : boolean= false;
  wrongUsername : boolean = false;


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 

  constructor(private userService: UserService, private router: Router,private snackBar: MatSnackBar, private fb :FormBuilder) {

    this.loginform = this.fb.group({
    username: [this.username, Validators.required],
      password: [this.password, Validators.required],
    
    });
  
  }

  logIn(): void {
    const isAuthenticated = this.userService.logIn(this.username, this.password);
    if (isAuthenticated) {
     this.router.navigate(['/home'])
    } else {
      this.wrongUsername =false
      this.wrongPassword=false
      this.openWrongPasswordSnackBar();
    
    }
  }
  openWrongPasswordSnackBar() {
    this.snackBar.open('Wrong password. Please try again.', 'Close', {
      duration: 1000, 
      panelClass: ['wrong-password-snackbar'], // Custom CSS class for styling
    });
  }

}