/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CitibikeService } from './citibike.service';

describe('Service: Citibike', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitibikeService]
    });
  });

  it('should ...', inject([CitibikeService], (service: CitibikeService) => {
    expect(service).toBeTruthy();
  }));
});
