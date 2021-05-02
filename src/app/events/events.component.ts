import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private db: AngularFirestore, private router: Router) { }

  events: any;

  ngOnInit(): void {

    this.getevents();
  }

  getevents(){
    this.db.collection("Events").snapshotChanges().subscribe(res => {
      this.events = res;
    }) 
  }

  submit(hashtag: string){
    this.router.navigate(['/events/hashtag'], { queryParams: {hashtag: hashtag}});
  }

}
