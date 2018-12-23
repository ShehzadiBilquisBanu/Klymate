import { Component, OnInit } from '@angular/core';
import { RandomImageProvider } from '../../providers/random-image-provider';

@Component({
  selector: 'Weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  
})
export class WeatherComponent implements OnInit {

  backgroungImageUrl: string = '';
  locationName: string = 'Paris';
  
  constructor(private randomImageProvider : RandomImageProvider) { }

  ngOnInit() {
    this.getRandomImageUrl();
  }

  getRandomImageUrl() {
    this.randomImageProvider.getRandomPhotos(this.locationName).subscribe((response: any) => {
      this.backgroungImageUrl = response.urls.regular;
      console.log(this.backgroungImageUrl); 
    })
  }

}
