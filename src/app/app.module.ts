import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RandomImageProvider } from './providers/random-image-provider/random-image-provider';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { WeatherProvider } from './providers/weather-provider/weather-provider';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatRippleModule, MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationDialog } from './dialogs/location-dialog/location-dialog';
import { LocationProvider } from './providers/location-provider/location-provider';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LocationDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    DemoMaterialModule

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  entryComponents: [ WeatherComponent , LocationDialog ],
  providers: [
    RandomImageProvider,
    WeatherProvider,
    LocationProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
