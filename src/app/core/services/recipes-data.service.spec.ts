import { TestBed } from '@angular/core/testing';

import { RecipesDataService } from './recipes-data.service';

describe('RecipesDataService', () => {
  let service: RecipesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
