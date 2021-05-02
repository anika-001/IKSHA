import { Component, OnInit } from '@angular/core';
import { Navbar, NavDrawer } from './jsonobjectsdata/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'educationapp';

  opened: boolean = false;
  user: any;
  userEmail: any = "idkyet";
  navdata: any;
  navdrawerdata: any;
  selectedRole: string = "student";
  constructor(){}

  ngOnInit(){
    this.navdata = Navbar;
    this.navdrawerdata = NavDrawer;
  }
}
