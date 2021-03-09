import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var result:boolean=false;
     
        if(this.authService.isLoggedIn) {
          result= true;
        }else{
          this.router.navigate(['/login']);
          result=false;
        }
        return result;
    
       // not logged in so redirect to login page with the return url
      
       
  }
}