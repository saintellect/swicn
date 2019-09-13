import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcommentsComponent } from './showcomments.component';

describe('ShowcommentsComponent', () => {
  let component: ShowcommentsComponent;
  let fixture: ComponentFixture<ShowcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
