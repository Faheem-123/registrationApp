import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginUser(token){
    localStorage.setItem("token",token);
    return true;
  }

  isLoggedIn(){
    let token=localStorage.getItem("token")
    if(token==undefined || token==='' || token==null){
      return false
    }
    else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token');
    return false;
  }

  getToken(){
    return localStorage.getItem("token");
  }

  generateToken(userNamePassword){
 
    return this.http.post('http://localhost:9090/api/auth/token',  userNamePassword).pipe(
      // catchError(this.handleError)
    );
  }

  // public handleError(error:any) {
    // this.toastr.error(error.error.message)
    // console.log(error.error.message);
    // let errorMessage = '';
    // if (error.error instanceof ErrorEvent) {
    //   // client-side error
    //   errorMessage = `Error: ${error.error.message}`;
    // } else {
    //   // server-side error
    //   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    // }
    // console.log(error.error.message);
    // window.alert(error.error.message)
    // this.toastr.error(error.error.message);
    // return throwError(() => {
      // this.toastr.error(error.error.message);
        // return error.error.message;
    // });
  // }

}
