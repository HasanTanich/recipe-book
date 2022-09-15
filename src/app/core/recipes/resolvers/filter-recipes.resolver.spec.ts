import { TestBed } from '@angular/core/testing';

import { FilterRecipesResolver } from './filter-recipes.resolver';

describe('FilterRecipesResolver', () => {
  let resolver: FilterRecipesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FilterRecipesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
