import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Signup } from '../auth.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: Signup = new Signup();
  errorMSG = '';
  private token = localStorage.getItem('auth-token');
  constructor(private authService: AuthService, private router: Router) { }
  accept = false;
  ngOnInit() {
    if (this.token) {
      this.router.navigate(['/user/home/']);
    }
  }

  onSubmit(form) {

    this.authService.signup(this.signup).subscribe((response: any) => {
      if (response.message === 'Account was created') {
        this.router.navigate(['/signin/']);
      } else {
        this.errorMSG = response.message;
      }
    }, (error) => {
      this.errorMSG = error.statusText;
      console.log(error)

    });
  }

}
