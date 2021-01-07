import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { AddToCartModalComponent } from './add-to-cart-modal/add-to-cart-modal.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})

export class ShopComponent implements OnInit {
  constructor(
    public productsService: ProductsService,
    public authService: AuthService,
    public categoriesService: CategoriesService,
    public dialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "freediving",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/black/freediving.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "scubaDiving",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/black/scubaDiving.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "surfing",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/black/surfing.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "kitesurfing",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/black/kitesurfing.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "fishing",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/black/fishing.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "spearfishing",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/black/spearfishing.svg")
    );
  }

  @ViewChild(CartComponent) cart: CartComponent;
  public selectedProduct: any
  public amount: number
  public isAdded: boolean
  public currentCategory: string = this.categoriesService.all[this.categoriesService.selected]?.client_name

  openDialog(product: any): void {
    console.log(product)
    const dialogRef = this.dialog.open(AddToCartModalComponent, {
      width: '250px',
      data: { product, amount: this.amount }
    });

    dialogRef.componentInstance.cartChanged.subscribe(() => {
      this.cart.getCart()
    })

    dialogRef.afterClosed().subscribe(result => {
      this.amount = result;
    });
  }

  getCategoryProducts(category: string) {
    if (category) {
      this.productsService.searchMode = false
      this.currentCategory = category
      this.productsService.getByCategory(this.currentCategory).subscribe(
        res => {
          this.productsService.products = res
        },
        err => {
          this.authService.checkToken(err)
          console.log(err)
        }
      )
    }
  }

  openAdminDrawer({ drawer, product = null }) {
    this.selectedProduct = product
    this.productsService.tempProduct = { ...product }
    drawer.open()
  }

  ngOnInit(): void {
    if (!this.productsService.searchMode) {
      this.getCategoryProducts(this.currentCategory)
    }
  }

}