import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public http: HttpClient) { }

  count() {
    return this.http.get('https://tridentmarinesports.herokuapp.com/orders/count');
  }

  new(body: any) {
    return this.http.post('https://tridentmarinesports.herokuapp.com/orders', body, {
      headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.access_token }
    })
  }

  getByUser(userID: string) {
    return this.http.get('https://tridentmarinesports.herokuapp.com/orders/user/' + userID, {
      headers: { 'Authorization': localStorage.access_token }
    })
  }

  getAllShippingDates() {
    return this.http.get('https://tridentmarinesports.herokuapp.com/orders/dates', {
      headers: { 'Authorization': localStorage.access_token }
    })
  }

  receipt(orderID: string) {
    return this.http.post('https://tridentmarinesports.herokuapp.com/orders/receipt', { orderID }, {
      headers: { 'Authorization': localStorage.access_token }
    })
  }
}
