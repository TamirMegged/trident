import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public http: HttpClient) { }

  count() {
    return this.http.get('http://localhost:1000/orders/count');
  }

  new(body: any) {
    return this.http.post('http://localhost:1000/orders', body, {
      headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.access_token }
    })
  }

  getByUser(userID: string) {
    return this.http.get('http://localhost:1000/orders/user/' + userID, {
      headers: { 'Authorization': localStorage.access_token }
    })
  }

  getAllShippingDates() {
    return this.http.get('http://localhost:1000/orders/dates', {
      headers: { 'Authorization': localStorage.access_token }
    })
  }

  receipt(orderID: string) {
    return this.http.post('http://localhost:1000/orders/receipt', { orderID }, {
      headers: { 'Authorization': localStorage.access_token }
    })
  }
}
