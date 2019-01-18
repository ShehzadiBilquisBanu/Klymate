import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LocationProvider {

  private url = 'http://autocomplete.geocoder.api.here.com/6.2/suggest.json?app_id=u2SQ5YWXiVzovR07MT7q&app_code=7raXWTMO7yaZbBizsf2x3A&beginHighlight=<b>&endHighlight=</b>';

  constructor(private httpClient: HttpClient) { }

  getPlaceSuggestions(searchText: string): Observable<any> {
   return this.httpClient.get(this.url, {
     params: {
       query: searchText
     }
    });
  }
}
