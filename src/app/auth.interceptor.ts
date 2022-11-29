import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { LoginService } from './services copy/login.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService,private toastr: ToastrService,){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");
        let newReq=req;
        let token=this.loginService.getToken()
        // console.log("Interceptor",token)
        if(token!=null){
            newReq=newReq.clone({
              setHeaders:{
                Authorization: `Bearer ${token}`}
              })
            console.log(newReq)
        }
        return next.handle(newReq)
        .pipe(
          retry(1),
          catchError((error: HttpErrorResponse) => {
              let errorMessage = '';
              if (error.error instanceof ErrorEvent) {
                  // client-side error
                  errorMessage = `Error: ${error.error.message}`;
              } else {
                  // server-side error
                  errorMessage = `Error Status: ${error.status} \n Message: ${error.message}`;
              }
              // console.log(error.error.message);
              this.toastr.error(errorMessage)
              return throwError(errorMessage);
          })
      )
    }
}
