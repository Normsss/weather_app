import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirComponents } from '../../../models/airComponents';
import { Forecast } from '../../../models/forecast';
import { WeatherData } from '../../../models/weather';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent {
  
  @Input () forecast!: Forecast
  @Input () weather!: WeatherData
  @Input () polution!: AirComponents
  
};
