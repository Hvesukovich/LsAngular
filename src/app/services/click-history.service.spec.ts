import { TestBed, inject } from '@angular/core/testing';

import { ClickHistoryService } from './click-history.service';

describe('ClickHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClickHistoryService]
    });
  });

  it('should ...', inject([ClickHistoryService], (service: ClickHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
