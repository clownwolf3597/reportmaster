import { Component, OnInit } from '@angular/core';
import { employees } from 'src/assets/mock';

@Component({
  selector: 'app-send-report',
  templateUrl: './send-report.component.html',
  styleUrls: ['./send-report.component.scss']
})
export class SendReportComponent implements OnInit {

  constructor() { }

  get employees(): any[] {
    return employees;
  }

  ngOnInit(): void {
  }

}
