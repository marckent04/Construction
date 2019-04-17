import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadService } from 'src/app/services/read/read.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  id: number;
  project: Project;
  public isCollapsed = false;
  constructor(private route: ActivatedRoute, private read: ReadService) {
    this.id = +this.route.snapshot.params['id'];
    this.read.project(this.id).subscribe(
      (data: Project) =>  {
        this.project = data;
      }
    )
  }



  ngOnInit() {
  }

}
