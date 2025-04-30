import { Component } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'template-form',
    templateUrl: './template-form.component.html',
    styleUrls: ['./template-form.component.css'],
    standalone:true,
    imports:[FormsModule,CommonModule]
})
export class templateComponent{
   user: {
    name: string;
    email: string;
    pswd: string;
    username: string;
   } = {
    name: '',
    email: '',
    pswd: '',
    username: ''
   };

    onFormSubmit(form:NgForm){
        console.log(form,);
        console.log(this.user);
        
      
        

    }

}