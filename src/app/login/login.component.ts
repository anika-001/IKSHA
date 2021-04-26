import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  togglelogin(bool: boolean){
    this.login = bool;
  }
}
