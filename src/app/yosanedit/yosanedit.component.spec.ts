import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YosaneditComponent } from './yosanedit.component';

describe('YosaneditComponent', () => {
  let component: YosaneditComponent;
  let fixture: ComponentFixture<YosaneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YosaneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YosaneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
