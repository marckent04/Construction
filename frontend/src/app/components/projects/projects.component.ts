import { Component, OnInit } from '@angular/core';
import { ReadService } from 'src/app/services/read/read.service';
import { ServerConfigService } from 'src/app/services/config/server-config.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  work = +localStorage.getItem('work');
  projects;
  url: string;
  constructor(private read: ReadService, private config: ServerConfigService) {
    const work = +localStorage.getItem('work');

    const id = +localStorage.getItem('id');

    if (work === 1) {
      this.read.projects(+id, 1).subscribe(
        (data) => {
          this.projects = data;
          this.projects.forEach(project => {
            project.imageProjet = `${this.config.PROJECT_PATH}/${project.imageProjet}`;
          });
        }
      );
    } else {
      this.read.projects(+id, 2).subscribe(
        (data) => {
          this.projects = data;
        }
      );
    }
  }

  ngOnInit() {
  }



}
