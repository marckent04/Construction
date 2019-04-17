import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() nom: string;
  @Input() location: string;
  @Input() img: string;
  @Input() id: number;
  constructor(private route: Router) { }

  ngOnInit() {
  }


}
