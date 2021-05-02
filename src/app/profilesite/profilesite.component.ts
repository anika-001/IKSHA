import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profilesite',
  templateUrl: './profilesite.component.html',
  styleUrls: ['./profilesite.component.scss']
})
export class ProfilesiteComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  fname: any;
  lname:any;
  email:any;
  phone:any;
  title:any;
  company:any;
  location:any;
  startDate:any;
  endDate:any;
  description:any;
  skill1:any;
  skill2:any;
  skill3:any;
  skill4:any;

  ngOnInit(): void {
    this.fname = this.route.snapshot.queryParams['fname'];
    this.lname = this.route.snapshot.queryParams['lname'];
    this.email = this.route.snapshot.queryParams['email'];
    this.skill1 = this.route.snapshot.queryParams['skill1'];
    this.skill2 = this.route.snapshot.queryParams['skill2'];
    this.skill3 = this.route.snapshot.queryParams['skill3'];
    this.skill4 = this.route.snapshot.queryParams['skill4'];

    this.phone=this.route.snapshot.queryParams['phone'];
    this.title=this.route.snapshot.queryParams['title'];
    this.company = this.route.snapshot.queryParams['company'];
    this.startDate=this.route.snapshot.queryParams['startDate'];
    this.endDate=this.route.snapshot.queryParams['endDate'];
    this.description=this.route.snapshot.queryParams['description'];
  }

}
