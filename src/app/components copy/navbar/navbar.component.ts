import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services copy/login.service';

import { UserService } from 'src/app/user.service';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['login'])

  }

  login() {

    if (this.loginService.isLoggedIn()) {
      if (true) {
        this.toastr.warning("Warning", "Already logged in !!")
      }
      else {
        this.router.navigate(['login'])
      }
    } else {
      this.router.navigate(['login'])
    }
    // this.service.logout();
    // this.router.navigate(['login'])

  }
  setting(){
    this.router.navigate(['setting'])
  }



}
