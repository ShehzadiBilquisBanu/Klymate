import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  styles:['body { background-color: gray; }']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
