import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YosanmodalComponent } from './yosanmodal.component';

describe('YosanmodalComponent', () => {
  let component: YosanmodalComponent;
  let fixture: ComponentFixture<YosanmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YosanmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YosanmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
