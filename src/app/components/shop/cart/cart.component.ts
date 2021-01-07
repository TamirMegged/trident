import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { RemoveCartItemModalComponent } from '../remove-cart-item-modal/remove-cart-item-modal.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { EmptyCartModalComponent } from '../empty-cart-modal/empty-cart-modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public cartService: CartService,
    public dialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "emptyCart",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../localhost:1000/public/icons/emptyCart.svg")
    );
  }

  @Input() drawer: any
  public cart: any

  getCart() {
    this.cartService.getCart(this.authService.currentUser._id).subscribe(
      res => {
        this.cart = res
        this.cart.total_price = 0
        this.cart.products.forEach(item => {
          this.cart.total_price += (item.product.price * item.amount)
        });
      },
      err => {
        console.log(err)
      })
  }

  ngOnInit(): void {
    this.getCart()
  }

  openRemoveItemDialog(product: any): void {
    const dialogRef = this.dialog.open(RemoveCartItemModalComponent, {
      width: '250px',
      data: { product: product }
    });

    dialogRef.componentInstance.cartChanged.subscribe(() => {
      this.getCart()
    })

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   product = result;
    // });
  }

  openEmptyCartDialog(): void {
    const dialogRef = this.dialog.open(EmptyCartModalComponent, {
      width: '250px'
    });

    dialogRef.componentInstance.cartChanged.subscribe(() => {
      this.getCart()
    })
  }

  toggleEditMode(item: any) {
    item.editMode = item.editMode ? false : true
  }

  saveChanges(item: any) {
    this.toggleEditMode(item)
    const body = { itemID: item._id, userID: this.authService.currentUser._id, amount: item.amount }
    this.cartService.editItem(body).subscribe(
      res => {
        console.log(res)
        this.getCart()
      },
      err => {
        this.authService.checkToken(err)
        console.log(err)
      }
    )
  }

}
