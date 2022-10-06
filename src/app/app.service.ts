import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { pipe } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AppService {
    isLoginPage: boolean = false;

    constructor(private router: Router) {
        this.router.events.subscribe((value: any) => {
            if (value instanceof NavigationEnd) {
                this.isLoginPage = (value?.url === '/login');
            }
        });

    }
}