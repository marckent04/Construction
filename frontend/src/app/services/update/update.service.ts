import { Injectable } from '@angular/core';
import { ServerConfigService } from '../config/server-config.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Authentification/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private http: HttpClient, private config: ServerConfigService, auth: AuthService) {}

  PHP_API_URL = this.config.PHP_API_URL;

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
        localStorage.setItem('picture', `${this.config.PROFILE_PATH}/${data.picture}`);
      }
    )
  }

  invitation(id: number) {
    return this.http.get(`${this.PHP_API_URL}/acceptInvit.php?id=${id}`);
  }

  taskStatus(form: FormData) {
    return this.http.post(`${this.PHP_API_URL}/taskend.php`, form);
  }

  task(id: number, choice: number) {
    return this.http.get(`${this.PHP_API_URL}/taskValidate.php?id=${id}&choice=${choice}`);
  }

  projectStatut(id: number) {
    return this.http.get(`${this.PHP_API_URL}/projectFinished.php?id=${id}`);
  }
}




