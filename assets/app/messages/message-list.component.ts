import { Component, OnInit } from "@angular/core";
import { Message } from './message.model';
import { MessageService } from "./message.service";

@Component({
    selector:'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
              <app-message 
                    [inputMessage]="message" 
                    *ngFor="let message of messages"></app-message> 
        </div>
    `
    //providers :[MessageService]    

})

export class MessageListComponent implements OnInit{
        //messages: Message[] = [
        //new Message('Some message','Asiri'),
        //new Message('Something Else','Asiri'),
        //new Message('Another message','Asiri')
        //];

        messages: Message[];

    constructor(private messageService: MessageService) {}

    ngOnInit(){
        this.messageService.getMessages()
        .subscribe(
            (messages: Message[]) =>{
                this.messages = messages;
            }
        );
        
    }
}