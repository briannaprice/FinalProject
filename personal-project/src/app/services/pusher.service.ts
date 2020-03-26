import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;
  messageChannel: any;

  constructor() { this.initializePusher(); }

  initializePusher(): void{
    this.pusher = new Pusher(environment.pusher.key, { authEndpoint: 'http://localhost:4200/pusher/auth'});
    this.messageChannel = this.pusher.subscribe('private-all-messages');
  }
}
