import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  chats = [{
    name: "Pranita",
    Message: "Hey I need help in angular"
  },
  {
    name: "Amisha",
    Message: "Lets do it at 3 PM"
  },
  {
    name: "Unknown",
    Message: "Hello...."
  },
  {
    name: "Isha",
    Message: "We have a phase tomorrow"
  }
]
  ngOnInit(): void {
  }

}
