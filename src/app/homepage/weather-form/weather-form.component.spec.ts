import { WeatherService } from 'src/app/services/weather.service';
import { WeatherFormComponent } from './weather-form.component';

describe('WeatherFormComponent', () => {
  let component: WeatherFormComponent;
  let service: WeatherService;

  

  beforeEach(() => {
    component = new WeatherFormComponent (service)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
