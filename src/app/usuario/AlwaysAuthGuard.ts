import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AlwaysAuthGuard implements CanActivate {

    constructor() { }

    canActivate() {
        //console.log("AlwaysAuthGuard");
        return true;
    }
}