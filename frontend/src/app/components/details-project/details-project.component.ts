import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadService } from 'src/app/services/read/read.service';
import { ServerConfigService } from 'src/app/services/config/server-config.service';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})



export class DetailsProjectComponent implements OnInit {

  path: string;
  id: number;
  project: Project ={
    imageProjet : null,
    id: null,
    nomArchitecte: null,
    nomProjet: null,
    dateFin: null,
    budget: null,
    emplacement: null,
    createdAt: null,
    id_proprio: null,
    status: null,
  };
  public isCollapsed = false;
  constructor(private route: ActivatedRoute, private read: ReadService,private config: ServerConfigService) {
    this.id = +this.route.snapshot.params['id'];
    this.path = this.config.PROJECT_PATH;
    this.read.project(this.id).subscribe(
      (data: Project) =>  {
        console.log(data);
        this.project = data;
        console.log(this.project);
      }
    );
  }

  ngOnInit() {
  }

}
