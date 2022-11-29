import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services copy/login.service';

import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(private toastr: ToastrService, private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],

    })
  }

  onCancel() {
    this.loginForm.reset()
  }

  onSubmit() {
    this.loginService.generateToken(this.loginForm.value).subscribe(
      (response: any) => {
        console.log(response.token)
        this.loginService.loginUser(response.token)
        window.location.href = "/home";
      })

  }

  get f() {
    return this.loginForm.controls
  }

}
