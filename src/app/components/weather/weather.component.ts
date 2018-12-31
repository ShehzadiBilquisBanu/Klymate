import { WeatherInfo } from './../../entities/weather-info';
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
  weatherTemperature: number = 0;
  weatherInfo: WeatherInfo = <WeatherInfo>{};

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
    });
  }

  getWeatherInfo() {
    this.weatherProvider.getWeatherDetails(this.locationName).subscribe((response: any) => {
      this.weatherTemperature = response.main.temp;
      this.weatherInfo = response.weather[0];
    });
  }
}
