import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { ServerConfigService } from '../config/server-config.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  constructor(private http: HttpClient, private config: ServerConfigService) {}

  PHP_API_URL = this.config.PHP_API_URL;


  connected: User = {id: null, name: null, fname: null, mail: null, mdp: null, work: null, picture: null}

  ngOnInit() { }


  inscription (user: User) {
    return this.http.post(`${this.PHP_API_URL}/inscription.php`, user);
  }

  connexion (user: User) {
    return this.http.post(`${this.PHP_API_URL}/connexion.php`, user);
  }
}
