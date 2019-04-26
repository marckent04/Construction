import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UinfosComponent } from './uinfos.component';

describe('UinfosComponent', () => {
  let component: UinfosComponent;
  let fixture: ComponentFixture<UinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
