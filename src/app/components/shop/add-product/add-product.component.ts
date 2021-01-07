import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    public http: HttpClient,
    public authService: AuthService,
    public dialog: MatDialog,
    public productsService: ProductsService,
    public categoriesService: CategoriesService,
    public uploadService: UploadService,
    public router: Router,
    public fb: FormBuilder,
  ) { }

  @Input() drawer: any
  @Input() updateProducts: any
  @Output() productsChanged = new EventEmitter();
  public productForm: FormGroup
  public categories: any
  public selectedImg: File

  ngOnInit(): void {
    this.categories = this.categoriesService.all
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required]
    })
  }

  onFileChanged(event) {
    if (event.target.files.length) {
      this.selectedImg = event.target.files[0]
    }
  }

  save() {
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
    const image = `http://localhost:1000/public/${this.selectedImg.name}`;

    const { name, company, price, category } = this.productForm.value
    const body = { name, company, price, image, category }
    this.productsService.add(body).subscribe(
      res => {
        console.log(res)
        this.drawer.close()
        this.categoriesService.selected = this.categoriesService.all.findIndex(({ client_name }) => client_name === category)
        this.productsChanged.emit()
        this.productsService.products.push({ ...this.productForm.value, image })
        this.selectedImg = undefined
      },
      err => {
        this.authService.checkToken(err)
        console.log(err)
      }
    )
  }

}