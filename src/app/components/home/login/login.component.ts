import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import decode from 'jwt-decode';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public http: HttpClient,
    public fb: FormBuilder,
    private router: Router,
    public authService: AuthService,
    public categoriesService: CategoriesService,
  ) { }

  public loginForm: FormGroup
  public result: any
  public hide = true
  public isError = false
  public errorMsg: string
  @Input() cart: any
  @Output() loggedIn = new EventEmitter()

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email]
      ],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z0-9]).{8,10}$')
      ]]
    })
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      res => {
        console.log(res)
        this.isError = false
        this.result = res
        localStorage.access_token = this.result.access_token
        let user = decode(this.result.access_token)
        // const { _id, first_name, last_name, email, city, street, cart, role } = user
        this.authService.currentUser = user
        this.loggedIn.emit()
        if (this.authService.currentUser.role === 'admin') {
          this.router.navigateByUrl('/shop')
        }
      },
      err => {
        this.isError = true
        console.log(err)
        this.errorMsg = err.error.msg
      }
    )
  }

  changeWantedTab(i: number) {
    this.categoriesService.selected = i;
  }

  createDB() {
    this.http.post('https://tridentmarinesports.herokuapp.com/createdb', {}).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      })
  }

  deleteDB() {
    this.http.delete('https://tridentmarinesports.herokuapp.com/createdb', {}).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      })
  }

}
