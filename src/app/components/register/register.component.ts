import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import decode from 'jwt-decode'
import { CitiesService } from 'src/app/services/cities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public citiesService: CitiesService,
    public router: Router,
    public fb: FormBuilder,
  ) { }

  public firstForm: FormGroup
  public secondForm: FormGroup
  public result: any
  public hide = true
  public isError = false
  public errorMsg: string
  public cities = this.citiesService.all

  ngOnInit(): void {
    this.firstForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      id_number: ['', [
        Validators.required,
        Validators.pattern('^\\d{9}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z0-9]).{8,10}$')
      ]],
      passwordConfirm: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z0-9]).{8,10}$'),
      ]]
    }, { validator: this.checkPasswords.bind(this) })

    this.secondForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required]
    })

  }

  checkPasswords() {
    if (this.firstForm) {
      let password = this.firstForm.controls.password
      let passwordConfirm = this.firstForm.controls.passwordConfirm
      if (password.value !== passwordConfirm.value) {
        return passwordConfirm.setErrors({ notSame: true })
      }
      else {
        return passwordConfirm.setErrors(null);
      }
    }
  }

  register() {
    this.authService.register({ ...this.firstForm.value, ...this.secondForm.value }).subscribe(
      res => {
        console.log(res)
        this.isError = false
        this.authService.login({ email: this.firstForm.value.email, password: this.firstForm.value.password }).subscribe(
          res => {
            console.log(res)
            this.result = res;
            localStorage.access_token = this.result.access_token
            let user = decode(this.result.access_token)
            this.authService.currentUser = user
            this.router.navigateByUrl('/home')
          },
          err => {
            console.log(err)
          }
        )
      },
      err => {
        this.isError = true
        this.errorMsg = err.error.msg
        console.log(err)
      }
    )
  }
}
