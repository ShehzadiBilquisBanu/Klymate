import { WeatherInfo } from './../../entities/weather-info';
import { Component, OnInit } from '@angular/core';
import { RandomImageProvider } from '../../providers/random-image-provider/random-image-provider';
import { WeatherProvider } from '../../providers/weather-provider/weather-provider';
import { MatDialog } from '@angular/material';
import { LocationDialog } from '../../dialogs/location-dialog/location-dialog';
import { LatLng } from "../../entities/location-suggestion";

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  locationName: string = 'Chennai';
  latLng: LatLng = {Latitude: 13.08363, Longitude: 80.28252};
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
    this.weatherProvider.getWeatherDetails(this.latLng).subscribe((response: any) => {
      this.weatherTemperature = response.main.temp;
      this.weatherInfo = response.weather[0];
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LocationDialog, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.latLng = result.latLng;
      this.locationName = result.locationName;
      this.ngOnInit();
    });
  }
}

