import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfigService } from '../config/server-config.service';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  projects(idUser: number, work: number) {
    return this.http.get(`${this.config.PHP_API_URL}/getProjects.php?id=${idUser}&work=${work}`);
  }

  project(idProject: number) {
     return this.http.get(`${this.config.PHP_API_URL}/getProject.php?id=${idProject}`);
  }

  notifications(id: number) {
    return this.http.get(`${this.config.PHP_API_URL}/notifs.php?id=${id}`);
  }

  tasks(idProjet: number) {
    return this.http.get(`${this.config.PHP_API_URL}/getTasks.php?id=${idProjet}`);
  }

  depenses(idProject: number) {
    return this.http.get(`${this.config.PHP_API_URL}/depenses.php?id=${idProject}`);
  }

  images(idProject: number) {
    return this.http.get(`${this.config.PHP_API_URL}/galerie.php?id=${idProject}`);
  }

  constructor(private http: HttpClient, private config: ServerConfigService) { }
}
