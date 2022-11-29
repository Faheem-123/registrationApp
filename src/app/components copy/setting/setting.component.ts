import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  
  orders: any;
  users: any;
  constructor(private toastr: ToastrService, private fb: FormBuilder, private userService: UserService, private route: Router) { }

  ngOnInit(): void {

    this.getAllOrders();
  }

  getAllOrders() {
    this.userService.getUsers().subscribe(response => {
      console.log(response);
      this.users = response

    }
    )
  }

  onEdit(orderId) {
    this.route.navigate(['edit-order/' + orderId])
  }

  onDelete(userId) {
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You will not be able to recover this record!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonAriaLabel: "Yes, delete it!",
    //   cancelButtonText: "No, keep it"
    // }).then((result) => {
    //   if (result.value) {
        this.userService.deleteUser(userId).subscribe(response => {
          this.getAllOrders();
          // this.toastr.success("Delete successfully !")
        })
        // Swal.fire(
        //   'Deleted',
        //   'Your record has been deleted.',
        //   'success'
        // )
    //   } else if (result.dismiss === Swal.DismissReason.cancel) {
    //     Swal.fire(
    //       'Cancelled',
    //       'Your record is safe :',
    //       'error'
    //     )
    //   }
    // })
  }



}
