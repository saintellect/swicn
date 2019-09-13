import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditteammemberComponent } from './editteammember.component';

describe('EditteammemberComponent', () => {
  let component: EditteammemberComponent;
  let fixture: ComponentFixture<EditteammemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditteammemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditteammemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
