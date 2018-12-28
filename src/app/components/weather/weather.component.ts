import { Component, OnInit } from '@angular/core';
import { RandomImageProvider } from '../../providers/random-image-provider/random-image-provider';
import { WeatherProvider } from '../../providers/weather-provider/weather-provider';
import { HttpHeaderResponse } from '@angular/common/http';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  backgroungImageUrl: string = '';
  locationName: string = 'Chennai';
  weatherTemperature:any = '';
  weatherDetails:any = [];
  weatherIcon:any='';
  weatherDesc:any = '';
  weatherStatus:any = '';
  
  constructor(private randomImageProvider: RandomImageProvider,
              private weatherProvider: WeatherProvider) { }

  ngOnInit() {
  // this.backgroungImageUrl = 'https://images.unsplash.com/photo-1464606203924-507eec7f5e52?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ3NjYwfQ';
 this.getRandomImageUrl();
  this.getWeatherInfo();

  }

  getRandomImageUrl() {
    this.randomImageProvider.getRandomPhotos(this.locationName).subscribe((response: any) => {
      this.backgroungImageUrl = response.urls.regular;
      console.log(response);
    });
  }

  getWeatherInfo() {
    this.weatherProvider.getWeatherDetails().subscribe((response:any) => {
      this.weatherTemperature=response.main.temp;
      this.weatherDetails=response.weather[0];
      this.weatherIcon=this.weatherDetails.icon;
      this.weatherDesc = this.weatherDetails.description;
      this.weatherStatus = this.weatherDetails.main;
      this.locationName = response.name;
      console.log(this.locationName);
      console.log(this.weatherDesc);
      console.log(this.weatherIcon);
      console.log(this.weatherDetails);
      console.log(this.weatherTemperature); 
      console.log(response);
    });
  }
}
