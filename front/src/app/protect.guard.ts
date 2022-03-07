import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class ProtectGuard implements CanActivateChild {
  constructor(private cookieService : CookieService ){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.cookieService.get('AccessTokens')=='true'){
        console.log('absadsdc')
        return true;
      }
      else{
        console.log('abc')
        return false
      }
  }
  
}
