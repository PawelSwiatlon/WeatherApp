import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherService } from './weather.service';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { ForecastWeatherComponent } from './forecast-weather/forecast-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    CityWeatherComponent,
    ForecastWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
