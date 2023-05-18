import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: any;
  let apiResponseMock: any;

  beforeEach(() => {
    apiResponseMock = {}
    service = new WeatherService (httpMock)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
