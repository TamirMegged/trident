import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { RemoveCartItemModalComponent } from '../remove-cart-item-modal/remove-cart-item-modal.component';
import { ProductsService } from 'src/app/services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    public productsService: ProductsService,
    public categoriesService: CategoriesService,
    public uploadService: UploadService,
    public fb: FormBuilder,
  ) { }

  @Input() drawer: any
  @Input() product: any
  @Output() productsChanged = new EventEmitter();
  public productForm: FormGroup
  public categories: any
  public selectedImg: File

  ngOnInit(): void {
    this.categories = this.categoriesService.all
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      price: [Number, Validators.required],
      category: [this.product.category, Validators.required]
    })
  }

  openRemoveItemDialog(product: any): void {
    const dialogRef = this.dialog.open(RemoveCartItemModalComponent, {
      width: '250px',
      data: { product: product }
    });
  }

  toggleEditMode(item: any) {
    item.editMode = item.editMode ? false : true
  }

  onFileChanged(event) {
    if (event.target.files.length) {
      this.selectedImg = event.target.files[0]
    }
  }

  saveChanges() {
    let image: string;
    if (this.selectedImg) {
      const formData = new FormData()
      formData.append('file', this.selectedImg)
      this.uploadService.upload(formData).subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.log(err)
        }
      )
      image = `http://localhost:1000/public/${this.selectedImg.name}`;
      this.productsService.tempProduct.image = image
    } else {
      image = this.product.image
    }

    console.log(this.productForm.value)
    const { name, company, price, category } = this.productForm.value
    const body = { id: this.product._id, name, company, price, image, category }
    this.productsService.edit(body).subscribe(
      res => {
        this.drawer.close()
        console.log(res)
        this.categoriesService.selected = this.categoriesService.all.findIndex(({ client_name }) => client_name === category)
        this.productsChanged.emit()
        this.changeProductOnClient()
        this.selectedImg = undefined
      },
      err => {
        this.authService.checkToken(err)
        console.log(err)
      }
    )
  }

  changeProductOnClient() {
    const changedProduct = this.productsService.tempProduct
    this.product.name = changedProduct.name
    this.product.company = changedProduct.company
    this.product.price = changedProduct.price
    this.product.image = changedProduct.image
    this.product.category = changedProduct.category
  }

}