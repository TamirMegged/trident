import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http: HttpClient) { }

  getCart(userID: any) {
    return this.http.get('https://tridentmarinesports.herokuapp.com/cart/' + userID, {
      headers: { 'Authorization': localStorage.access_token }
    })
  }

  addItem(body: any) {
    return this.http.post('https://tridentmarinesports.herokuapp.com/cart/items/add', body, {
      headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.access_token }
    })
  }

  editItem(body: any) {
    return this.http.put('https://tridentmarinesports.herokuapp.com/cart/items/edit', body, {
      headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.access_token }
    })
  }

  removeItem(userID: any, itemID: any) {
    return this.http.delete(`https://tridentmarinesports.herokuapp.com/cart/items/${userID}/${itemID}`, {
      headers: { 'Authorization': localStorage.access_token }
    })
  }

  empty(userID: any) {
    return this.http.delete('https://tridentmarinesports.herokuapp.com/cart/empty/' + userID, {
      headers: { 'Authorization': localStorage.access_token }
    })
  }
}
