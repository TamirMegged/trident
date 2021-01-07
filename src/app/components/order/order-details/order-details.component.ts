import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { CitiesService } from 'src/app/services/cities.service';
import { OrdersService } from 'src/app/services/orders.service';
import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})

export class OrderDetailsComponent implements OnInit {

  constructor(
    public citiesService: CitiesService,
    public authService: AuthService,
    public ordersService: OrdersService,
    public fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  public orderForm: FormGroup
  public cities = this.citiesService.all
  public street: string
  public city: string
  public minDate: Date
  public shippingDates: any

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      city: [this.city, Validators.required],
      street: [this.street, Validators.required],
      date: ['', Validators.required],
      creditCard: ['', [
        Validators.required,
        // My Validator
        Validators.pattern('^[0-9]{4}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$')
        // Real Credit Card Validator
        // Validators.pattern('^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$')
      ]]
    })
    this.minDate = new Date()
    this.ordersService.getAllShippingDates().subscribe(
      res => {
        console.log(res)
        this.shippingDates = res
      },
      err => {
        console.log(err)
      }
    )
  }

  autoFill(e: Event, control: string) {
    e.preventDefault()
    switch (control) {
      case "city":
        this.city = this.authService.currentUser.city
        break;
      case "street":
        this.street = this.authService.currentUser.street
        break;
    }
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    let shippingsOnThisDate = this.shippingDates.filter(date => {
      const shippingDate = new Date(date)
      return shippingDate.getDate() == d.getDate() && shippingDate.getMonth() == d.getMonth() && shippingDate.getFullYear() == d.getFullYear()
    })
    console.log(shippingsOnThisDate)
    return day !== 0 && day !== 6 && shippingsOnThisDate?.length < 3;
  }

  makeAnOrder(): void {
    const { city, street, date, creditCard } = this.orderForm.value
    const user = this.authService.currentUser
    if (user && city && street && date && creditCard) {
      const body = { user, city, street, date, creditCard }
      console.log(body)
      this.ordersService.new(body).subscribe(
        res => {
          const result: any = res
          console.log(result)
          this.dialog.open(OrderConfirmationComponent, {
            disableClose: true,
            width: '40vw',
            data: { orderID: result.orderID}
          });
        },
        err => {
          this.authService.checkToken(err)
          console.log(err)
        }
      )
    } else {
      console.log("ERROR - Can not complete order without all the details")
    }
  }

}
