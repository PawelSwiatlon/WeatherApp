import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css']
})
export class ForecastWeatherComponent implements OnInit {
  localForecastWeather;
  location;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((post) => {
      this.location = post.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.weatherService.localForecastWeather(lat, lon).subscribe((data) => {
        this.localForecastWeather = data;
      });
    });
  }

}
