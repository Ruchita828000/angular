import { Component } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
@Component({
    selector: 'template-form',
    templateUrl: './template-form.component.html',
    styleUrls: [],
    standalone:true,
    imports:[FormsModule]
})
export class templateComponent{
    onFormSubmit(form:NgForm){
        console.log(form.value.fullName,'name')
        console.log(form.value.userName,'username')
        console.log(form.value.email,'email')

    }

}