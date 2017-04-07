import { TestBed, inject } from '@angular/core/testing';

import { YprajnenijaService } from './yprajnenija.service';

describe('YprajnenijaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YprajnenijaService]
    });
  });

  it('should ...', inject([YprajnenijaService], (service: YprajnenijaService) => {
    expect(service).toBeTruthy();
  }));
});
