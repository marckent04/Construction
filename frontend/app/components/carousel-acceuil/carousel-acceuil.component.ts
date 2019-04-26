import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-acceuil',
  templateUrl: './carousel-acceuil.component.html',
  styleUrls: ['./carousel-acceuil.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselAcceuilComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
  }

  ngOnInit() {
  }

}
