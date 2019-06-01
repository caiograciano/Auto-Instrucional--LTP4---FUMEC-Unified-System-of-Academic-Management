import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticatorService } from './authenticator.service';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {

    constructor(private authenticatorService: AuthenticatorService, private router: Router) { }

    canActivate() {
        //console.log("OnlyLoggedInUsers");
        if (this.authenticatorService.isLogged()) {
            return true;
        } else {
            window.alert("Você não tem permissão para ver esta página.");
            this.router.navigate(['/login']);
            return false;
        }
    }
}