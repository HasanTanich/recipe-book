import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesFiltersTabComponent } from './recipes-filters-tab.component';

describe('RecipesFiltersTabComponent', () => {
  let component: RecipesFiltersTabComponent;
  let fixture: ComponentFixture<RecipesFiltersTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesFiltersTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesFiltersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
