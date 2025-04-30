import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './header/header.component';
import { templateComponent } from './template-forms/template-form.component';
import {ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,headerComponent,ReactiveFormsComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'practice-app';
}
