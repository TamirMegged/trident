import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import modalData from '../../../interfaces/modalData.interface';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.css']
})

export class AddToCartModalComponent implements OnInit {

  constructor(
    public cartService: CartService,
    public authService: AuthService,
    public dialogRef: MatDialogRef<AddToCartModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: modalData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  @Output() cartChanged = new EventEmitter();

  addToCart() {
    const body = {
      amount: this.data.amount,
      product: this.data.product,
      user: this.authService.currentUser
    }
    this.cartService.addItem(body).subscribe(
      res => {
        console.log(res)
        this.cartChanged.emit()
      },
      err => {
        this.authService.checkToken(err)
        console.log(err)
      }
    )
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.data.amount = 1
  }

}
