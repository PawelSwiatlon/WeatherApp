import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherService } from './weather.service';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { ForecastWeatherComponent } from './forecast-weather/forecast-weather.component';
import { MenuComponent } from './menu/menu.component';
import { StatisticWeatherComponent } from './statistic-weather/statistic-weather.component';
import { InformationComponent } from './information/information.component';
import { ContactComponent } from './contact/contact.component';
const appRout = [
  {path: '', component: StatisticWeatherComponent},
  {path: 'information', component: InformationComponent},
  {path: 'contact', component: ContactComponent},
  {path: '*', component: StatisticWeatherComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    CityWeatherComponent,
    ForecastWeatherComponent,
    MenuComponent,
    StatisticWeatherComponent,
    InformationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRout)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
