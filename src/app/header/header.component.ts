import { Component } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone:true
})
export class headerComponent{
    name:string='iphone';
    price:number=10000;
    color:string='blue'


}