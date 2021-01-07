import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public cartService: CartService,
    public ordersService: OrdersService
  ) { }

  public orders: any
  public cart: any

  getUserData() {
    this.cartService.getCart(this.authService.currentUser._id).subscribe(
      res => {
        this.cart = res
        console.log(this.cart)
      },
      err => {
        console.log(err)
      }
    )
    this.ordersService.getByUser(this.authService.currentUser._id).subscribe(
      res => {
        this.orders = res
        console.log(this.orders)
      },
      err => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    if (this.authService.currentUser?.role === 'customer') {
      this.getUserData()
    }
  }

}
