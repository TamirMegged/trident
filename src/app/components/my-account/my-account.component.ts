import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import * as moment from 'moment'

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public ordersService: OrdersService,
  ) { }

  public user: any
  public orders: any
  public moment = moment
  public cols = [
    "id",
    "shippingAddress",
    "orderDate",
    "shippingDate",
    "totalPrice",
    "creditCard"
  ]

  ngOnInit(): void {
    this.user = this.authService.currentUser
    if (this.user?.role === 'customer') {
      this.ordersService.getByUser(this.user._id).subscribe(
        (res: any) => {
          this.orders = res.reverse()
        },
        err => {
          this.authService.checkToken(err)
          console.log(err)
        }
      )
    }
  }

}
