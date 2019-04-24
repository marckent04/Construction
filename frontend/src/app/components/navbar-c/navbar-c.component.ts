import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-c',
  templateUrl: './navbar-c.component.html',
  styleUrls: ['./navbar-c.component.css']
})
export class NavbarCComponent implements OnInit {
  public isCollapsed = false;
  
  constructor(private route: Router) { }

  ngOnInit() {
  }

  deconnexion() {
    localStorage.clear();
    this.route.navigate(['/']);
  }

}
