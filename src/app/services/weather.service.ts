import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { WeatherData } from '../models/weather'
import { map, Observable, switchMap, tap } from 'rxjs';
import { AirComponents } from '../models/airComponents';
import { Forecast } from '../models/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {} 

  getWeather(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherUrl, {
        params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('appid', environment.apiKey)
      })
  }

  getAirPolution(lat:number, lon: number): Observable<AirComponents> {  
    return this.http.get<AirComponents>(environment.airPolutionUrl, {
      params: new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('appid', environment.apiKey)
    })
  }

  getForecast(cityName: string): Observable<Forecast> {
    return this.http.get<Forecast>(environment.forecastUrl, {
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('appid', environment.apiKey)
      .set('cnt', '4')
    })
  }
}
