
import { Component,OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { MessageService } from "./message.service";
import { Message } from "./message.model";


@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
    //providers: [MessageService]
})

export class MessageInputComponent implements OnInit{
    message: Message;

    constructor(private messageService: MessageService){}

    onSubmit(form: NgForm){
            //console.log(form)
          //console.log(value);
        if(this.message){
            //Edit
            this.message.content = form.value.content;
            //console.log(JSON.stringify(form.value.content));
            this.messageService.updateMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
            this.message = null;
        } else{
            //Create
            const message = new Message(form.value.content,'Asiri');
            this.messageService.addMessage(message)
               .subscribe(
                   data => console.log(data),
                   error => console.error(error)
               );
        }
        
        form.resetForm(); // reset form values
    }
    onClear(form:NgForm){
        this.message = null;
        form.resetForm();
    }
    ngOnInit(){
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    };
}