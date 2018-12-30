import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherProvider {
  private url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=0a3f5e52f1e4ff559f44ae1c4aa05dfc';

  constructor(private httpClient: HttpClient) { }

  getWeatherDetails(locationName: string): Observable<any> {
    return this.httpClient.get(this.url, {
      params: {
        q: locationName
      }
    });
  }
}
