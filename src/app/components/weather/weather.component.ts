import { Component, OnInit } from '@angular/core';
import { RandomImageProvider } from '../../providers/random-image-provider';

@Component({
  selector: 'Weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  
})
export class WeatherComponent implements OnInit {

  backgroungImageUrl: string = 'https://images.unsplash.com/photo-1526395639805-284e7aa3656c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ3NjYwfQ';
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
