import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomImageProvider {
  
  private url = 'https://api.unsplash.com/photos/random/?client_id=263cd5d7b0f1e758a529f442e56c413af431087fee823813e7e51b625eebbb15';
  
  constructor(private httpClient: HttpClient) {

  }
   
  getRandomPhotos(locationName: string){
     return this.httpClient.get(this.url, {
       params: {
         query: locationName
       }
     });
  }
}
