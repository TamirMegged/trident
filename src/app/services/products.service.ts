import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  public products: any
  public tempProduct: any
  public searchMode: boolean

  count() {
    return this.http.get('https://tridentmarinesports.herokuapp.com/products/count');
  }

  getByCategory(category: string) {
    return this.http.get('https://tridentmarinesports.herokuapp.com/products/' + category, {
      headers: { 'Authorization': localStorage.access_token }
    });
  }

  add(body: any) {
    return this.http.post('https://tridentmarinesports.herokuapp.com/products/add', body, {
      headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.access_token }
    })
  }

  edit(body: any) {
    return this.http.put('https://tridentmarinesports.herokuapp.com/products/edit', body, {
      headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.access_token }
    })
  }

  search(text: string) {
    return this.http.get('https://tridentmarinesports.herokuapp.com/products/search/' + text, {
      headers: { 'Authorization': localStorage.access_token }
    })
  }

}
