import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public slides = [
    { image: 'https://tridentmarinesports.herokuapp.com/public/slides/kitesurfing.jpg', text: "Kitesurfing" },
    { image: 'https://tridentmarinesports.herokuapp.com/public/slides/surfing.jpg', text: "Surfing" },
    { image: 'https://tridentmarinesports.herokuapp.com/public/slides/scubaDiving.jpg', text: "Scuba Diving" },
    { image: 'https://tridentmarinesports.herokuapp.com/public/slides/freediving.jpg', text: "Freediving" },
    { image: 'https://tridentmarinesports.herokuapp.com/public/slides/spearfishing.jpg', text: "Spearfishing" },
    { image: 'https://tridentmarinesports.herokuapp.com/public/slides/fishing.jpg', text: "Fishing" },
  ];

  ngOnInit(): void {
  }

}
