import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { WeatherInteface } from './weather-interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient ) { }

  localWeather(lat: string, lon: string ){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=88b260b35e9f9a74c6d3414002c0747c&units=metric`);
  }
  showCityWeather(city: string ){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=88b260b35e9f9a74c6d3414002c0747c&units=metric`);
  }
}
