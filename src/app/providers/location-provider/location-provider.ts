import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationProvider {

  private static appId = 'u2SQ5YWXiVzovR07MT7q';
  private static appCode = '7raXWTMO7yaZbBizsf2x3A';

  private suggestUrl = `http://autocomplete.geocoder.api.here.com/6.2/suggest.json?` +
                          `app_id=${LocationProvider.appId}` +
                          `&app_code=${LocationProvider.appCode}` +
                          `&beginHighlight=<b>` +
                          `&endHighlight=</b>`;

  private geocodeUrl =  `http://geocoder.api.here.com/6.2/geocode.json?` +
                        `app_id=${LocationProvider.appId}` +
                        `&app_code=${LocationProvider.appCode}`;

  constructor(private httpClient: HttpClient) { }

  getPlaceSuggestions(searchText: string): Observable<any> {
   return this.httpClient.get(this.suggestUrl, {
     params: {
       query: searchText
     }
    });
  }

  getLocationDetails(locationId: string) {
    return this.httpClient.get(this.geocodeUrl, {
      params: {
        locationid: locationId
      }
    });
  }
}
