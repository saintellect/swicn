import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtestimonialComponent } from './addtestimonial.component';

describe('AddtestimonialComponent', () => {
  let component: AddtestimonialComponent;
  let fixture: ComponentFixture<AddtestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
