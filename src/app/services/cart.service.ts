import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http: HttpClient) { }

  getCart(userID: any) {
    return this.http.get('http://localhost:1000/cart/' + userID, {
      headers: { 'Authorization': localStorage.access_token }
    })
  }

  addItem(body: any) {
    return this.http.post('http://localhost:1000/cart/items/add', body, {
      headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.access_token }
    })
  }

  editItem(body: any) {
    return this.http.put('http://localhost:1000/cart/items/edit', body, {
      headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.access_token }
    })
  }

  removeItem(userID: any, itemID: any) {
    return this.http.delete(`http://localhost:1000/cart/items/${userID}/${itemID}`, {
      headers: { 'Authorization': localStorage.access_token }
    })
  }

  empty(userID: any) {
    return this.http.delete('http://localhost:1000/cart/empty/' + userID, {
      headers: { 'Authorization': localStorage.access_token }
    })
  }
}
