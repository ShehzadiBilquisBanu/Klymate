import { Component, OnInit } from '@angular/core';
import { WeatherProvider } from '../../providers/weather-provider';

@Component({
  selector: 'Weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  
})
export class WeatherComponent implements OnInit {

  backgroungImageUrl: string = '';
  locationName: string = 'Paris';
  
  constructor(private weatherProvider : WeatherProvider) { }

  ngOnInit() {
    this.getRandomImageUrl();
  }

  getRandomImageUrl() {
    this.weatherProvider.getRandomPhotos(this.locationName).subscribe((response: any) => {
      this.backgroungImageUrl = response.urls.regular;
      console.log(this.backgroungImageUrl); 
    })
  }

}
