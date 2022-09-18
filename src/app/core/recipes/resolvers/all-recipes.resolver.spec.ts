import { TestBed } from '@angular/core/testing';

import { AllRecipesResolver } from './all-recipes.resolver';

describe('AllRecipesResolver', () => {
  let resolver: AllRecipesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllRecipesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
