import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages: String[] = [];
  
  constructor() {}
  addMessage(message: String) {
    this.messages.push(message);
  }
  getMessages() {
    return this.messages;
  }
  clearMessages() {
    this.messages = [];
  }
}
