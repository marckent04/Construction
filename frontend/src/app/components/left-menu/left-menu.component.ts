import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Authentification/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  user: User;
  constructor(private auth: AuthService,private route: Router) {
    this.user = this.auth.connected;
  }

  deconnexion () {
    localStorage.clear();
    this.route.navigate(['/']);
  }

  ngOnInit() {
  }

}
