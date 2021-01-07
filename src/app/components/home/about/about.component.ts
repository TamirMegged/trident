import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public slides = [
    { image: 'http://localhost:1000/public//slides/kitesurfing.jpg', text: "Kitesurfing" },
    { image: 'http://localhost:1000/public//slides/surfing.jpg', text: "Surfing" },
    { image: 'http://localhost:1000/public//slides/scubaDiving.jpg', text: "Scuba Diving" },
    { image: 'http://localhost:1000/public//slides/freediving.jpg', text: "Freediving" },
    { image: 'http://localhost:1000/public//slides/spearfishing.jpg', text: "Spearfishing" },
    { image: 'http://localhost:1000/public//slides/fishing.jpg', text: "Fishing" },
  ];

  ngOnInit(): void {
  }

}
