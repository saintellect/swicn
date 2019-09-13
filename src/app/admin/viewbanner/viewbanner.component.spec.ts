import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbannerComponent } from './viewbanner.component';

describe('ViewbannerComponent', () => {
  let component: ViewbannerComponent;
  let fixture: ComponentFixture<ViewbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
