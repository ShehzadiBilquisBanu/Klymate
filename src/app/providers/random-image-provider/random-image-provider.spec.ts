import { TestBed, inject } from '@angular/core/testing';

import { RandomImageProvider } from './random-image-provider';

describe('RandomImageProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomImageProvider]
    });
  });

  it('should be created', inject([RandomImageProvider], (provider: RandomImageProvider) => {
    expect(provider).toBeTruthy();
  }));
});
