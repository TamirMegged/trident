import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import * as moment from 'moment'
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public productsService: ProductsService,
    public ordersService: OrdersService,
    public cartService: CartService,
  ) { }

  public productsCounter: number
  public ordersCounter: number
  public moment = moment
  @Input() cart: any
  @Input() orders: any

  getNumberOfProducts() {
    this.productsService.count().subscribe(
      res => {
        if (typeof (res) === 'number') {
          this.productsCounter = res;
        } else {
          console.log(res)
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  getNumberOfOrders() {
    this.ordersService.count().subscribe(
      res => {
        if (typeof (res) === 'number') {
          this.ordersCounter = res;
        } else {
          console.log(res)
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.getNumberOfProducts()
    this.getNumberOfOrders()
  }

}
