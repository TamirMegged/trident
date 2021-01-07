import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  all = [
    { client_name: "Scuba Diving", name: "scubaDiving" },
    { client_name: "Freediving", name: "freediving" },
    { client_name: "Surfing", name: "surfing" },
    { client_name: "Kitesurfing", name: "kitesurfing" },
    { client_name: "Spearfishing", name: "spearfishing" },
    { client_name: "Fishing", name: "fishing" }
  ]

  selected: number = 0;
}
