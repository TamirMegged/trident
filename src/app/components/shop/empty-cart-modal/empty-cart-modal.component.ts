import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-empty-cart-modal',
  templateUrl: './empty-cart-modal.component.html',
  styleUrls: ['./empty-cart-modal.component.css']
})
export class EmptyCartModalComponent implements OnInit {

  constructor(
    public cartService: CartService,
    public authService: AuthService,
    public dialogRef: MatDialogRef<EmptyCartModalComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  @Output() cartChanged = new EventEmitter();

  emptyCart() {
    this.cartService.empty(this.authService.currentUser._id).subscribe(
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

}
