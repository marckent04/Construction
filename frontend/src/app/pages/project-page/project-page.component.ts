import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  work = +localStorage.getItem('work');
  uri =  `/project/${this.route.firstChild.params._value.id}`;
  ngOnInit() {

  }

  constructor (private route: ActivatedRoute) {
  }

}
