import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService, User} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  async checkLogin(url: string) {
    const user: User = this.authService.userInfo || (await this.authService.getCurrentUser()).data;
    if (user) {
      this.authService.userInfo = user;
      return true;
    }

    // Navigate to the login page with extras
    this.router.navigate(['/login'], {queryParams: {redirectUrl: url}});
    return false;
  }
}
