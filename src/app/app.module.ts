import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RandomImageProvider } from './providers/random-image-provider'
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { WeatherProvider } from './providers/weather-provider';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    
  ],
  providers: [
    RandomImageProvider,
    WeatherProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
