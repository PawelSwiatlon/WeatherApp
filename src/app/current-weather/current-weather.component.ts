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
  permissionDenied = false;
  constructor(private weatherService: WeatherService ) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((post) => {
      this.location = post.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.weatherService.localWeather(lat, lon).subscribe((data: any) => {
        this.localWeather = {
          cityName: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          weatherKind: data.weather[0].description,
          tempMax: data.main.temp_max,
          tempMin: data.main.temp_min
        };
      });
    }, (e) => {
      if(e.code === e.PERMISSION_DENIED){
        this.permissionDenied = true;
      }
    });
  }

}
