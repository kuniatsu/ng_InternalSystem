import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YosanComponent } from './yosan.component';

describe('YosanComponent', () => {
  let component: YosanComponent;
  let fixture: ComponentFixture<YosanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YosanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YosanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
