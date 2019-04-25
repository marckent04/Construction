import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar-c',
  templateUrl: './navbar-c.component.html',
  styleUrls: ['./navbar-c.component.css']
})
export class NavbarCComponent implements OnInit {
  public isCollapsed = false;
  inProject = false;
  user: Storage;
  uri =  `/project/${this.activatedRoute.firstChild.params._value.id}`;
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {
    this.user = localStorage;
    if(this.activatedRoute.firstChild.params._value.id) {
      this.inProject = true;
    } else {
      this.inProject = false;
    }
  }

  ngOnInit() {
  }

  deconnexion() {
    localStorage.clear();
    this.route.navigate(['/']);
  }

}
