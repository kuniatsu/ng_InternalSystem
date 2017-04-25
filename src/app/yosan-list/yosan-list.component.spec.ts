import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YosanListComponent } from './yosan-list.component';

describe('YosanListComponent', () => {
  let component: YosanListComponent;
  let fixture: ComponentFixture<YosanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YosanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YosanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
