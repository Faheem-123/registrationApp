import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from 'src/app/services copy/signup.service';

import { UserService } from '../../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private toastr: ToastrService, private fb: FormBuilder, private signupService: SignupService, private router: Router) { }

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      id: [0],
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      about: [''],
      user_type: ['']

    })
  }

  onCancel() {
    this.signupForm.reset()
  }

  onSubmit() {
    this.signupService.signup(this.signupForm.value).subscribe(
      (response: any) => {
        console.log(response)

        this.toastr.success("User added successfully!!")
        this.router.navigate(['login'])
      }
    )

  }

  get f() {
    return this.signupForm.controls
  }

}
