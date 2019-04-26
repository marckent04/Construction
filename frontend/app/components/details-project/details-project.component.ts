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
    depTache: null,
    depUser: 0,
    totalDep: 0,
    balance: 0,
  };

  depenses: any;
  public isCollapsed = false;
  constructor(private route: ActivatedRoute, private read: ReadService,private config: ServerConfigService) {
    this.id = +this.route.snapshot.params['id'];
    this.path = this.config.PROJECT_PATH;
    this.read.project(this.id).subscribe(
      (data: Project) =>  {
        this.project = data[0];
        const dep = data[1];
        console.log(dep);
        if (parseFloat(dep[0].montant) > 0) {
          this.project.depTache = +dep[0].montant;
        } else {
          this.project.depTache = 0;
        }

        if (parseFloat(dep[1].montant) > 0) {
          this.project.depUser = dep[1].montant;
        } else {
          this.project.depUser = 0;
        }
        this.project.totalDep = +this.project.depTache + +this.project.depUser;
        this.project.balance = +this.project.budget - +this.project.totalDep;
      }
    );
  }

  ngOnInit() {
  }

}
