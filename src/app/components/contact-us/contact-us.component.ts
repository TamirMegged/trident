import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {

  constructor() { }

  public phoneNumber: string = "+972502228295"
  public emailAddress: string = "tridentms@gmail.com"

  ngOnInit(): void {
  }

}
