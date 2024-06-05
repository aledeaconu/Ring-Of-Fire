import { TestBed } from '@angular/core/testing';

import { GamestartService } from './gamestart.service';

describe('GamestartService', () => {
  let service: GamestartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamestartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
