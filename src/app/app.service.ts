import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { pipe } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AppService {
    constructor(private router: Router) {

    }
}