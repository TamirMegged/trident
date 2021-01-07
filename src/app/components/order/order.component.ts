import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public cartService: CartService
  ) { }

  public cart: any

  ngOnInit(): void {
    this.cartService.getCart(this.authService.currentUser._id).subscribe(
      res => {
        this.cart = res
      },
      err => {
        this.authService.checkToken(err)
        console.log(err)
      }
    )
  }

}
