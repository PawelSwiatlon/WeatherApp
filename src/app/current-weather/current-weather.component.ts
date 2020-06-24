import { Component, OnInit } from '@angular/core';

import { WeatherInteface } from '../weather-interface';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  localWeather: WeatherInteface;
  location;
  constructor(private weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.localWeather = this.weatherService.weatherTest();
  }

}
