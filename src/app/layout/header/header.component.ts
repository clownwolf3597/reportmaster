import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { clients } from 'src/assets/mock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedClient!: number;

  @Input() menuReference: any;

  constructor(public appService: AppService) { }

  get clients(): any[] {
    return clients;
  }

  get isApplication(): boolean {
    return window.location.href.includes('/app');
  }

  ngOnInit(): void {
  }

}
