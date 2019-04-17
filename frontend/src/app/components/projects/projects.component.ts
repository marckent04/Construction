import { Component, OnInit } from '@angular/core';
import { ReadService } from 'src/app/services/read/read.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects;
  url: string;
  constructor(private read: ReadService) {
    const id = localStorage.getItem('id');
    this.read.projects(+id).subscribe(
      (data) => {
        this.projects = data;
      }
    );
  }

  ngOnInit() {
  }



}
