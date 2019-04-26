import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConfigService } from '../config/server-config.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  PHP_API_URL = this.config.PHP_API_URL;

  invitation(id: number) {
    return this.http.delete(`${this.PHP_API_URL}/deleteInv.php?id=${id}`);
  }

  project(id: number) {
    return this.http.delete(`${this.PHP_API_URL}/deleteProject.php?id=${id}`);
  }


  constructor(private http: HttpClient, private config: ServerConfigService) { }
}
