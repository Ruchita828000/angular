import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { headerComponent } from './app/header/header.component';
import { templateComponent } from './app/template-forms/template-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
@NgModule({
  declarations:[],
  imports:[BrowserModule,headerComponent,templateComponent,ReactiveFormsModule],
  bootstrap:[],
  providers:[]
})
export class AppModule{}


