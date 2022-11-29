import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services copy/order.service';
import { UserService } from 'src/app/user.service';
// import { passwordMatch } from 'src/app/password_validator';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  registerForm: FormGroup;
  users: any;
  id: any;
  submitted: boolean;
  constructor(private toastr: ToastrService,
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.setFormState();
    this.userService.getUsers().subscribe(response => {
      this.users = response;
      console.log(this.users)
    })
    // this.getAllUsers()
  }

  setFormState() {

    this.registerForm = this.fb.group({
      id: [],
      userId: [],
      productName: ['', Validators.required],
      orderItems: ['', Validators.required],
      totalPrice: ['', Validators.required],
      orderQuantity: ['', Validators.required],
      customerName: ['', Validators.required],
      customerAddress: ['', Validators.required],
      createdDate: ['', Validators.required],
      paid: [''],

    })

  }

  onSubmit() {
    console.log(this.registerForm.value)
    this.submitted = true
    this.orderService.addOrder(this.registerForm.value).subscribe(
      response => {
        console.log(response)
        this.toastr.success("Order added successfully!!")
        this.router.navigate(['list-order'])
      }
    )

  }
  onCancel() {
    this.router.navigate(['list-order'])
  }
  get f() {
    return this.registerForm.controls
  }


}
