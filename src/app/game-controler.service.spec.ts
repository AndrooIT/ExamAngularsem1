import { TestBed } from '@angular/core/testing';

import { GameControlerService } from './game-controler.service';

describe('GameControlerService', () => {
  let service: GameControlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameControlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
