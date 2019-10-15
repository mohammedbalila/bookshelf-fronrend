import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Signin } from '../auth.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin: Signin = new Signin();
  errorMSG = '';
  private token = localStorage.getItem('auth-token');
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.token) {
      this.router.navigate(['/user/home/']);
    }
  }

  onSubmit(form) {
     this.authService.signin(this.signin).subscribe((response: any) => {
       if (response.token) {
            localStorage.setItem('auth-token', response.token);
            localStorage.setItem('_id', response.user._id);
            this.token = localStorage.getItem('auth-token');
            this.router.navigate(['/user/home/']);
            } else {
                this.errorMSG = response.info;
            }
       }, (error) => {
      this.errorMSG = error.statusText;
    });
  }

} 
