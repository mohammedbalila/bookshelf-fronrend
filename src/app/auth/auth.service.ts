import { Injectable } from '@angular/core';
import { GlobalService } from '../app.globals';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Signup, Signin , Update , Updatepass} from './auth.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router : Router ,private globalsService: GlobalService, private httpClinet: HttpClient) { }

    signup(signup: Signup) {
        console.log(signup)
        return this.httpClinet.post(this.globalsService.apiUrl + 'users/signup',
            signup).pipe(catchError(this.errorHandler));
    }
    update(id ,phone) {
        return this.httpClinet.put(this.globalsService.apiUrl + 'users/' + id , phone ).pipe(catchError(this.errorHandler));
    }
    updateaddress(id , update) {
        return this.httpClinet.put(this.globalsService.apiUrl + 'users/update_address/' + id , update ).pipe(catchError(this.errorHandler));
    }
    updatepass(id, updatepass:Updatepass) {
        console.log(updatepass)
        return this.httpClinet.put(this.globalsService.apiUrl + 'users/' + id + '/' , updatepass  ).pipe(catchError(this.errorHandler));
    }
    signin(signin: Signin) {
        return this.httpClinet.post(this.globalsService.apiUrl + 'users/login',
            signin).pipe(catchError(this.errorHandler));
    }
 
    getToken() {
        const token = localStorage.getItem('auth-token');
        return token;
    }
 
    logoutUser() {
        localStorage.removeItem('auth-token')
        this.router.navigate([''])
      }
    getLoggedInUser() {
        const id = localStorage.getItem('_id');
        return this.httpClinet.get(`${this.globalsService.apiUrl}/users/${id}`);
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error);
    }
}
