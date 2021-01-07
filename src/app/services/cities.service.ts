import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }

  all = [
    "Haifa",
    "Tel Aviv",
    "Jerusalem",
    "Ashdod",
    "Eilat"
  ]
}
