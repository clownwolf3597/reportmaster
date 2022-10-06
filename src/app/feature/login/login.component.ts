import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showSignUpForm: boolean = false;
  constructor(private toastr: ToastrService,
    private appService: AppService) { }

  ngOnInit(): void {
    this.appService.setIsLoginPage(true);
  }

  createUser(): void {

  }

}
