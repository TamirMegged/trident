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
    return this.http.post('http://localhost:1000/upload', formData)
  }

}
