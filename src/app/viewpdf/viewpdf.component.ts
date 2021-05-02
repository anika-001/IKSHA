import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewpdf',
  templateUrl: './viewpdf.component.html',
  styleUrls: ['./viewpdf.component.scss']
})
export class ViewpdfComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  url: any;
  ngOnInit(): void {
    this.url = this.route.snapshot.queryParams['url']
  }

}
