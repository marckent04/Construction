import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ServerConfigService } from '../config/server-config.service';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  PHP_API_URL = this.config.PHP_API_URL;

  constructor(private http: HttpClient, private config: ServerConfigService) {}

  project(data) {
    return this.http.post(`${this.PHP_API_URL}/createProject.php`, data);
  }

  invitation(infos, status) {
    return this.http.post(`${this.PHP_API_URL}/sendInvit.php?action=${status}`, infos);
  }

  task(form: FormData) {
    return this.http.post(`${this.PHP_API_URL}/addTask.php`, form);
  }

  depense(form: FormData) {
    return this.http.post(`${this.PHP_API_URL}/addCost.php`, form);
  }
}
