import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showSignUpForm: boolean = false;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  createUser(): void {

  }

}
