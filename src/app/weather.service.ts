import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { WeatherInteface } from './weather-interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  current: WeatherInteface = {cityName: 'Sułkowice',
                            icon: 'http://weather.omgez911.com/icons/01d.png',
                            weatherKind: 'sunny',
                            temp: 30,
                            tempMax: 34,
                            tempMin: 24};

  constructor(private http: HttpClient ) { }

  weatherTest(){
    return this.current;
  }
  localWeather(lat: string, lon: string ){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=88b260b35e9f9a74c6d3414002c0747c&units=metric`);
  }
  showCityWeather(city: string ){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=88b260b35e9f9a74c6d3414002c0747c&units=metric`);
  }
}
