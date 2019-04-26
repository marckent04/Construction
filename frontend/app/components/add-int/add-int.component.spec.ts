import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIntComponent } from './add-int.component';

describe('AddIntComponent', () => {
  let component: AddIntComponent;
  let fixture: ComponentFixture<AddIntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
