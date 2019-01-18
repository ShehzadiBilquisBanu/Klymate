import { WeatherInfo } from './../../entities/weather-info';
import { Component, OnInit } from '@angular/core';
import { RandomImageProvider } from '../../providers/random-image-provider/random-image-provider';
import { WeatherProvider } from '../../providers/weather-provider/weather-provider';
import { MatDialog } from '@angular/material';
import { LocationDialog } from '../../dialogs/location-dialog/location-dialog';
import { LocationProvider } from '../../providers/location-provider/location-provider';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  locationName: string = 'Chennai';
  backgroungImageUrl: string = '';
  weatherTemperature: number = 0;
  weatherInfo: WeatherInfo = <WeatherInfo>{};

  constructor(private randomImageProvider: RandomImageProvider,
              private weatherProvider: WeatherProvider,
              public dialog: MatDialog) { }

  ngOnInit() {
    // this.backgroungImageUrl = 'https://buidln.clipdealer.com/002/413/572//previews/8--2413572-Tree%20branches%20on%20the%20background%20of%20white%20sky..jpg';
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

  openDialog(): void {
    const dialogRef = this.dialog.open(LocationDialog, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

