import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherProvider {
//private apikey: any = '0a3f5e52f1e4ff559f44ae1c4aa05dfc';
//private loc:string = '';
 private url = 'http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=0a3f5e52f1e4ff559f44ae1c4aa05dfc';

//private url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.loc+'&units=metric&APPID='+this.apikey+'';

  
  constructor(private httpClient: HttpClient) { }

  getWeatherDetails() {
    return this.httpClient.get(this.url);
  }
}
