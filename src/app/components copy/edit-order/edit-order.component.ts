import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services copy/order.service';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  registerForm: FormGroup;
  orders: any;
  id: any;
  response: any;
  submitted: boolean;
  users: any;
  constructor(private route: ActivatedRoute, private toastr: ToastrService, private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(response => {
      this.users = response;
      console.log(this.users)
    })

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

    this.route.params.subscribe(parms => {

      this.orderService.getOrderById(parseInt(parms['id'])).subscribe(Response => {
        console.log(Response);
        this.response = Response
        console.log(this.registerForm.get('createdDate').patchValue(this.response.createdDate))
        this.registerForm.patchValue(
          {
            id: this.response.id,
            userId: this.response.userId,
            productName: this.response.productName,
            orderItems: this.response.orderItems,
            totalPrice: this.response.totalPrice,
            orderQuantity: this.response.orderQuantity,
            customerName: this.response.customerName,
            customerAddress: this.response.customerAddress,
            paid: this.response.paid,
            createdDate: this.response.createdDate

          })


      })


    })
  }

  onCancel() {
    this.router.navigate(['list-order'])
  }

  onSubmit() {
    console.log(this.registerForm.value)
    this.submitted = true
    this.orderService.updateOrder(this.registerForm.value).subscribe(
      response => {
        console.log(response)
        this.toastr.success("Order updated successfully!!")
        this.router.navigate(['list-order'])
      }
    )

  }

  get f() {
    return this.registerForm.controls
  }

}
