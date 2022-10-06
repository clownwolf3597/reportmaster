import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { ManageReportComponent } from './feature/manage-report/manage-report.component';
import { SendReportComponent } from './feature/send-report/send-report.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'app',
    children: [
      {
        path: '',
        component: ManageReportComponent
      },
      {
        path: 'sendreport',
        component: SendReportComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
