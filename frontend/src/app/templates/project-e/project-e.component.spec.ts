import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEComponent } from './project-e.component';

describe('ProjectEComponent', () => {
  let component: ProjectEComponent;
  let fixture: ComponentFixture<ProjectEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
