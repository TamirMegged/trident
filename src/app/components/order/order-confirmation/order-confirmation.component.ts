import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OrderConfirmationComponent>,
    public router: Router,
    private ordersService: OrdersService,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public fileUrl: any

  ngOnInit(): void {
    console.log("ngOninit")
    this.createReceipt()
  }

  createReceipt() {
    console.log("createReceipt")
    this.ordersService.receipt(this.data.orderID).subscribe(
      res => {
        console.log(res)
        let data: any = res
        const blob = new Blob([data.receipt], { type: 'application/octet-stream' });
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));      },
      err => {
        console.log(err)
      }
    );
  }

  approve() {
    this.dialogRef.close();
    this.router.navigateByUrl('/home')
  }

}
