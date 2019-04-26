import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerConfigService {
  PHP_API_URL = 'http://127.0.0.1/construction/backend/api';
  GALERIE_PATH = './assets/uploads/tasks';
  PROFILE_PATH = './assets/uploads/profile';
  PROJECT_PATH = './assets/uploads/projects';
  constructor() { }
}
