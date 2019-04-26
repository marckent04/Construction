import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsFormComponent } from './ins-form.component';

describe('InsFormComponent', () => {
  let component: InsFormComponent;
  let fixture: ComponentFixture<InsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
