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

  ngOnInit(): void {
    this.fname = this.route.snapshot.queryParams['fname'];
  }

}
