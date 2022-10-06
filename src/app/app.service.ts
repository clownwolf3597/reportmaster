import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { pipe } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AppService {
    isLoginPage: boolean = false;

    constructor(private router: Router) {
        this.isLoginPage = !window.location.href.includes('app');
    }
}