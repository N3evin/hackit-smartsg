import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  updatedPoints = 0;

  constructor() { }

  ngOnInit() {
  }

  handlePointsUpdated(event) {
    console.group(event)
    this.updatedPoints = event.points;
  }
}
