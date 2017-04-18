import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthcalendarComponent } from './monthcalendar.component';

describe('MonthcalendarComponent', () => {
  let component: MonthcalendarComponent;
  let fixture: ComponentFixture<MonthcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
