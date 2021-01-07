import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  @Input() selectedProduct: any
  @Input() product: any
  @Input() drawer: any
  @Output() addBtnClick = new EventEmitter();
  @Output() editBtnClick = new EventEmitter();

  ngOnInit(): void {
  }

}
