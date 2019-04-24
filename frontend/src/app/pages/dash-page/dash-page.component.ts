import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Authentification/auth.service';

@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.css']
})
export class DashPageComponent implements OnInit {

  constructor(private auth: AuthService) {
    this.auth.connected = {
      id: +localStorage.getItem('id'),
      name: localStorage.getItem('name'),
      fname: localStorage.getItem('fname'),
      mail: localStorage.getItem('mail'),
      work: localStorage.getItem('work'),
      mdp: localStorage.getItem('mdp'),
      picture: localStorage.getItem('picture')
    };
  }

  ngOnInit() {
  }

}
