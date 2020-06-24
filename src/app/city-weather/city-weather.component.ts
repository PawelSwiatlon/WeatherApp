import { Component, OnInit } from '@angular/core';

import { WeatherInteface } from '../weather-interface';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  cityName: string;
  cityWeather: WeatherInteface;
  showInfoCity = false;
  constructor(private weaterService: WeatherService) { }

  ngOnInit(): void {
  }
  showCityWeather(){
    this.showInfoCity = true;
    this.weaterService.showCityWeather(this.cityName).subscribe((data: any) => {
      this.cityWeather = {
        cityName: data.name,
        icon: data.weather[0].icon,
        weatherKind: data.weather[0].description,
        temp: data.main.temp,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min
      };
    });
  }

}
