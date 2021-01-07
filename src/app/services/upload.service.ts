import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UploadService {

  constructor(
    public http: HttpClient,
  ) { }

  upload(formData: FormData) {
    return this.http.post('https://tridentmarinesports.herokuapp.com/upload', formData)
  }

}
