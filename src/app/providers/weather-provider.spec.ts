import { TestBed, inject } from '@angular/core/testing';

import { WeatherProvider } from './weather-provider';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherProvider]
    });
  });

  it('should be created', inject([WeatherProvider], (service: WeatherProvider) => {
    expect(service).toBeTruthy();
  }));
});
