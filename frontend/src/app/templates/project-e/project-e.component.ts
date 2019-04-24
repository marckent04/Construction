import { Component, OnInit, Input } from '@angular/core';
import { ServerConfigService } from 'src/app/services/config/server-config.service';

@Component({
  selector: 'app-project-e',
  templateUrl: './project-e.component.html',
  styleUrls: ['./project-e.component.css']
})
export class ProjectEComponent implements OnInit {
  @Input() infos: object;
  path: string;
  constructor(private config: ServerConfigService) {
    this.path = this.config.PROJECT_PATH;
  }

  ngOnInit() {
  }

}
