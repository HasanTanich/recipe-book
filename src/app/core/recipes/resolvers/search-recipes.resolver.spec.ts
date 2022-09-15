import { TestBed } from '@angular/core/testing';

import { SearchRecipesResolver } from './search-recipes.resolver';

describe('SearchRecipesResolver', () => {
  let resolver: SearchRecipesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SearchRecipesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
