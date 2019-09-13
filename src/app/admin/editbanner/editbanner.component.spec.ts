import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbannerComponent } from './editbanner.component';

describe('EditbannerComponent', () => {
  let component: EditbannerComponent;
  let fixture: ComponentFixture<EditbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
