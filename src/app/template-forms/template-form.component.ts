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
    name:string="";
    uname:string="";
    emailAddr:string="";
    password:any=""

    onFormSubmit(form:NgForm){
        // console.log(form.value.fullName,'name')
        // console.log(form.value.userName,'username')
        // console.log(form.value.email,'email')
        

    }

}