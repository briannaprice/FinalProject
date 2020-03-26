import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { PusherService } from './pusher.service';

export interface Message{
  text: string;
  user: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  [x: string]: any;
  messageStream = new ReplaySubject<Message>(1);

  constructor(private pusherService: PusherService) { this.initialize(); }

  initialize(){
    this.pusherService.messageChannel.bind('client-new-message', (message) => {
      this.emitNewMessage(message);
    });
  }

  send(message: Message){
    this.pusherService.messageChannel.trigger('client-new-message', message);
    this.emitNewMessage(message);
  }

  emitNewMessage(message: Message){
    this.messageStream.next(message);
  }
}
