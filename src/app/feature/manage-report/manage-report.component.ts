import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { report, tasks } from 'src/assets/mock';

@Component({
  selector: 'app-manage-report',
  templateUrl: './manage-report.component.html',
  styleUrls: ['./manage-report.component.scss']
})
export class ManageReportComponent implements OnInit {

  reportForm: FormGroup = new FormGroup({
    data: new FormArray([])
  })

  constructor() { }

  get tasks(): any[] {
    return tasks;
  }

  get report(): any[] {
    return report;
  }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {

  }

}
