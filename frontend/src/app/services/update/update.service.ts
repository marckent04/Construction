import { Injectable } from '@angular/core';
import { ServerConfigService } from '../config/server-config.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Authentification/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  PHP_API_URL = this.config.PHP_API_URL;
  constructor(private http: HttpClient, private config: ServerConfigService, auth: AuthService) {}

  user(user) {
    return this.http.post(`${this.PHP_API_URL}/updateInfos.php`, user);
  }

  session(id: number) {
    this.http.get(`${this.PHP_API_URL}/refresh.php?id=${id}`).subscribe(

      (data: Data) => {
        localStorage.setItem('id', data.id);
        localStorage.setItem('fname', data.firstname);
        localStorage.setItem('name', data.name);
        localStorage.setItem('work', data.work);
        localStorage.setItem('mail', data.mail);
        localStorage.setItem('mdp', data.mdp);
        localStorage.setItem('picture', data.picture);
      }
    )
  }
}
