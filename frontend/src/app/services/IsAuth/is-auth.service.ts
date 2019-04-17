import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Authentification/auth.service';


@Injectable({
  providedIn: 'root'
})
export class IsAuthService {

  constructor(private auth: AuthService, private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.length === 0) {
      return true;
    }
    else {
      this.router.navigate(['/welcome']);
    }
  }


}
