import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsCnnectedGuard  implements CanActivate {
  constructor(private route: Router) {}
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage.length > 0) {
        return true;
      } else {
        this.route.navigate(['/connexion']);
      }

    }
}
