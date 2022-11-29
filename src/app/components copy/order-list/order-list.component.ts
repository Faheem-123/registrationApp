import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services copy/order.service';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: any;
  constructor(private toastr: ToastrService, private fb: FormBuilder, private orderService: OrderService, private route: Router) { }

  ngOnInit(): void {

    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe(response => {
      console.log(response);
      this.orders = response

    }
    )
  }

  onEdit(orderId) {
    this.route.navigate(['edit-order/' + orderId])
  }

  onDelete(orderId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this record!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonAriaLabel: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then((result) => {
      if (result.value) {
        this.orderService.deleteOrder(orderId).subscribe(response => {
          this.getAllOrders();
          // this.toastr.success("Delete successfully !")
        })
        Swal.fire(
          'Deleted',
          'Your record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your record is safe :',
          'error'
        )
      }
    })
  }


}
