import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherProvider {
private url = 'api.openweathermap.org/data/2.5/weather?q=600012,IND356&APPID=0a3f5e52f1e4ff559f44ae1c4aa05dfc';
  constructor(private httpClient: HttpClient) { }

getWeatherDetails(){
return this.httpClient.get(this.url);
}

}
