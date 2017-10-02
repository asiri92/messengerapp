import { Component, Input} from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author{
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config{
            display: inline-block;
            font-style: right;
            font-size: 12px;
            width: 19%;
        }
        `]
})     
export class MessageComponent {
    @Input('inputMessage') message: Message;
    //@Output() editClicked =  new EventEmitter<string>();

    //color = 'red';

    constructor(private messageService: MessageService){}

    onEdit(){
        //alert('it workerd');
        //this.editClicked.emit('Voila,a new value');
        this.messageService.editMessage(this.message);
    }

    onDelete(){
            this.messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }
}