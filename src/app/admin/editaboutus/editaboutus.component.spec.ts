import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaboutusComponent } from './editaboutus.component';

describe('EditaboutusComponent', () => {
  let component: EditaboutusComponent;
  let fixture: ComponentFixture<EditaboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
