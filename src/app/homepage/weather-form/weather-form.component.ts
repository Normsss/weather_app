import { Component, NgModule, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { AirComponents } from '../../models/airComponents';
import { Forecast } from '../../models/forecast';
import { WeatherData } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit {

  weather!: WeatherData;
  polution!: AirComponents
  forecast!: Forecast
  
  cityName: string = ''
  lat:number = 0
  lon:number = 0
  iconUrl = environment.iconUrlBase

 constructor(private weatherService: WeatherService){
  
 }

 ngOnInit(): void {
  //this.getWeatherServiceData(this.cityName);
 }
 
 setVars(weather: WeatherData){
  this.lat = weather.coord.lat
  this.lon = weather.coord.lon
 }

 onSubmit(){
  this.getWeatherServiceData(this.cityName);
  this.cityName = '';
 }
 private getWeatherServiceData(cityName: string) {
  this.weatherService.getWeather(cityName).subscribe(
    {
      next: (response) => {
        this.weather = response
        this.setVars(this.weather)
        this.weatherService.getAirPolution(this.lat, this.lon).subscribe(
          polution => {
            this.polution = polution;
          }
         )
      }
    }
   )
   this.weatherService.getForecast(cityName).subscribe(
    forecast => {
      this.forecast = forecast;
    }
   )
 }
}
