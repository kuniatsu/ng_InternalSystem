import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveExpenseComponent } from './move-expense.component';

describe('MoveExpenseComponent', () => {
  let component: MoveExpenseComponent;
  let fixture: ComponentFixture<MoveExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
