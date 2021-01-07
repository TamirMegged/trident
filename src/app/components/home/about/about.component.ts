import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public slides = [
    { image: 'localhost:1000/public/slides/kitesurfing.jpg', text: "Kitesurfing" },
    { image: 'localhost:1000/public/slides/surfing.jpg', text: "Surfing" },
    { image: 'localhost:1000/public/slides/scubaDiving.jpg', text: "Scuba Diving" },
    { image: 'localhost:1000/public/slides/freediving.jpg', text: "Freediving" },
    { image: 'localhost:1000/public/slides/spearfishing.jpg', text: "Spearfishing" },
    { image: 'localhost:1000/public/slides/fishing.jpg', text: "Fishing" },
  ];

  ngOnInit(): void {
  }

}
