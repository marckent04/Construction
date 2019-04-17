import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-c',
  templateUrl: './navbar-c.component.html',
  styleUrls: ['./navbar-c.component.css']
})
export class NavbarCComponent implements OnInit {
  public isCollapsed = false;
  
  constructor() { }

  ngOnInit() {
  }

}
