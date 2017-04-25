import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YosanCheckComponent } from './yosan-check.component';

describe('YosanCheckComponent', () => {
  let component: YosanCheckComponent;
  let fixture: ComponentFixture<YosanCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YosanCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YosanCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
