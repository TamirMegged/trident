import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  public currentUser: any

  // public currentUser: any = {
  //   _id: "5fe8a057d617e00e8cae4d06",
  //   cart: {
  //     products: []
  //   },
  //   first_name: "Avi", 
  //   last_name: "Hamelech",
  //   email: "a@b",
  //   id_number: "123456789",
  //   city: "Tel Aviv",
  //   street: "das",
  //   role: "admin",
  //   // role: "customer",
  //   __v: 23
  // }

  getById(userID: string) {
    return this.http.get('http://localhost:1000/users/' + userID);
  }

  register(body: any) {
    return this.http.post('http://localhost:1000/users/register', body, {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  login(body: any) {
    return this.http.post('http://localhost:1000/users/login', body, {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  logout() {
    this.currentUser = undefined;
    localStorage.removeItem('access_token')
    this.router.navigateByUrl('/home')
  }

  checkToken(res: any) {
    if (res.error.msg === "Token expected" || res.error.msg === "Token invalid") {
      this.logout()
    }
  }

}
