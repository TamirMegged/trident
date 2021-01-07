import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public productsService: ProductsService,
    public categoriesService: CategoriesService,
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "darkLogo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("https://tridentmarinesports.herokuapp.com/public/darkLogo.svg")
    );
  }

  public searchText: string

  ngOnInit(): void {
  }

  search() {
    this.productsService.searchMode = true
    this.categoriesService.selected = this.categoriesService.all.length
    this.productsService.search(this.searchText).subscribe(
      res => {
        this.productsService.products = res
      },
      err => {
        this.authService.checkToken(err)
        console.log(err)
      }
    )
    this.router.navigateByUrl('/shop')
  }

  clearSearch() {
    this.productsService.searchMode = false
    this.searchText = ""
  }

  checkDisability() {
    return !this.searchText?.length || !this.searchText?.replace(/\s/g, '').length
  }

}
