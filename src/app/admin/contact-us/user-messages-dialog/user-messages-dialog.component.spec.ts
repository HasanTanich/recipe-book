import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessagesDialogComponent } from './user-messages-dialog.component';

describe('UserMessagesDialogComponent', () => {
  let component: UserMessagesDialogComponent;
  let fixture: ComponentFixture<UserMessagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMessagesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMessagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
