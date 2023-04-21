import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  tweetMessage:String=""
  tweetMaxLenght: number = 240
  tweetRemain: number = this.tweetMaxLenght

  constructor(private service: MessagesService){

  }

  sendTweet(){
    this.service.addMessage(this.tweetMessage)
    this.tweetMessage = ""
    this.tweetRemain = this.tweetMaxLenght
  }

  changeTweet(){
    this.tweetRemain = this.tweetMaxLenght - this.tweetMessage.length
  }
}
