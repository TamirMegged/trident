import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public slides = [
    { image: 'assets/slides/kitesurfing.jpg', text: "Kitesurfing" },
    { image: 'assets/slides/surfing.jpg', text: "Surfing" },
    { image: 'assets/slides/scubaDiving.jpg', text: "Scuba Diving" },
    { image: 'assets/slides/freediving.jpg', text: "Freediving" },
    { image: 'assets/slides/spearfishing.jpg', text: "Spearfishing" },
    { image: 'assets/slides/fishing.jpg', text: "Fishing" },
  ];

  ngOnInit(): void {
  }

}
