import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityUtil } from '../utils/security.util';

@Injectable()
export class AuthorizedGuard implements CanActivate {
    
    constructor(private router: Router){
        
    }
    canActivate(){
        const user = SecurityUtil.get();
        if(!user || !user.token){
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

}