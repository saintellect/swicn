import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittestimonialsComponent } from './edittestimonials.component';

describe('EdittestimonialsComponent', () => {
  let component: EdittestimonialsComponent;
  let fixture: ComponentFixture<EdittestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
