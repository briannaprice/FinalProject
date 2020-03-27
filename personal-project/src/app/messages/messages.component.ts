import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Array<Message>;

  constructor(private messageService: MessageService) { this.messages = []; }

  ngOnInit(): void {
    
  }

}
