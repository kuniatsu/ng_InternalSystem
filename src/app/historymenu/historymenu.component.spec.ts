import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorymenuComponent } from './historymenu.component';

describe('HistorymenuComponent', () => {
  let component: HistorymenuComponent;
  let fixture: ComponentFixture<HistorymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorymenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
