import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactqueriesComponent } from './contactqueries.component';

describe('ContactqueriesComponent', () => {
  let component: ContactqueriesComponent;
  let fixture: ComponentFixture<ContactqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
