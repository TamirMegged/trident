import { Component, Inject, OnInit, Output, EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import modalData from '../../../interfaces/modalData.interface'

@Component({
  selector: 'app-remove-cart-item-modal',
  templateUrl: './remove-cart-item-modal.component.html',
  styleUrls: ['./remove-cart-item-modal.component.css']
})
export class RemoveCartItemModalComponent implements OnInit {

  constructor(
    public cartService: CartService,
    public authService: AuthService,
    public dialogRef: MatDialogRef<RemoveCartItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: modalData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  @Output() cartChanged = new EventEmitter();

  
  removeCartItem() {
    this.cartService.removeItem(this.authService.currentUser._id, this.data.product._id).subscribe(
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
