import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfigService } from '../config/server-config.service';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  projects(idUser: number) {
    return this.http.get(`${this.config.PHP_API_URL}/getProjects.php?id=${idUser}`);
  }

  project(idProject: number) {
     return this.http.get(`${this.config.PHP_API_URL}/getProject.php?id=${idProject}`);
  }

  constructor(private http: HttpClient, private config: ServerConfigService) { }
}
