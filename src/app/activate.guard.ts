import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginService } from './services copy/login.service';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {

  constructor(private loginService : LoginService,private router: Router,private toastr: ToastrService,){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    

    if(this.loginService.isLoggedIn()){
    
      return true;
    }
    else{
      
      this.toastr.error("Sorry, You are not logged in !","Error")
      this.router.navigate(['/login'])
    }
      
  }
  
  
}
