import { Component, OnInit } from '@angular/core';
import { ReadService } from 'src/app/services/read/read.service';
import { ActivatedRoute } from '@angular/router';
import { ServerConfigService } from 'src/app/services/config/server-config.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
  images;
  constructor(private read: ReadService, private route: ActivatedRoute, private config: ServerConfigService) {
    const idProject = this.route.parent.params._value.id;
    this.read.images(+idProject).subscribe(
      (data) => {
        this.images = data;
        //console.log(this.images);
        this.images.forEach(img => {
          img.img = `${this.config.GALERIE_PATH}/${img.img}`;
        });
      }
    );
  }

  ngOnInit() {
  }

}
