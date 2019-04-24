import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAcceuilComponent } from './carousel-acceuil.component';

describe('CarouselAcceuilComponent', () => {
  let component: CarouselAcceuilComponent;
  let fixture: ComponentFixture<CarouselAcceuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselAcceuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
