import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-new-messages',
  templateUrl: './new-messages.component.html',
  styleUrls: ['./new-messages.component.scss']
})
export class NewMessagesComponent implements OnInit {
  user: string;
  message: string;

  constructor(private messageService: MessageService) { }

  newMessage(text: string, user: string): void{
    this.messageService.send({text: text, user: user});
    this.message = '';
  }

  ngOnInit(): void {
  }

}
