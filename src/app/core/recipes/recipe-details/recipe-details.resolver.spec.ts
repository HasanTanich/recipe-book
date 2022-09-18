import { TestBed } from '@angular/core/testing';

import { RecipeDetailsResolver } from './recipe-details.resolver';

describe('RecipeDetailsResolver', () => {
  let resolver: RecipeDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RecipeDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
