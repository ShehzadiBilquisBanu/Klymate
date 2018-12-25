import { Component, OnInit } from '@angular/core';
import { RandomImageProvider } from '../../providers/random-image-provider';
import { WeatherProvider } from '../../providers/weather-provider';

@Component({
  selector: 'Weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  
})
export class WeatherComponent implements OnInit {

  backgroungImageUrl: string = '';
  locationName: string = 'India';
  
  constructor(private randomImageProvider : RandomImageProvider,
              private weatherProvider: WeatherProvider) { }

  ngOnInit() {
  /*  this.getRandomImageUrl();  */
  }

 /* getRandomImageUrl() {
    this.randomImageProvider.getRandomPhotos(this.locationName).subscribe((response: any) => {
      this.backgroungImageUrl = response.urls.regular;
      console.log(this.backgroungImageUrl); 
    })
  }
getWeatherInfo(){
  this.weatherProvider.getWeatherDetails().subscribe(response => {
console.log(response);
  });
} */
}
