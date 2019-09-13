import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtestimonialsComponent } from './viewtestimonials.component';

describe('ViewtestimonialsComponent', () => {
  let component: ViewtestimonialsComponent;
  let fixture: ComponentFixture<ViewtestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
