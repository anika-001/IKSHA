import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navbar, NavDrawer } from './jsonobjectsdata/navigation';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'educationapp';

  opened: boolean = false;
  user: any;
  userEmail: any = "New User";
  navdata: any;
  navdrawerdata: any;
  selectedRole: string = "student";
  userID: any;
  useremail: any;
  constructor(private as: AuthService, private router: Router){}

  ngOnInit(){

    this.as.getUserState()
    .subscribe(user => {
      if(user == null){this.router.navigate(['/login'])}
      this.userID = user.uid;
      this.userEmail = user.email;
      //console.log(farm, id);
    })

    this.navdata = Navbar;
    this.navdrawerdata = NavDrawer;
  }

  logout(){
    this.as.logout().then(() => {
      this.router.navigate(['/login']);
    })
  }
}
