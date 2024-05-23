import { TestBed } from '@angular/core/testing';

import { ValidateStudentIdService } from './validate-student-id.service';

describe('ValidateStudentIdService', () => {
  let service: ValidateStudentIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateStudentIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
