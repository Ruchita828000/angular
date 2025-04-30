import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'reactive-forms',
  imports: [],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent implements OnInit {
  reactiveForm!: FormGroup
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null),
      username: new FormControl(null),
      email: new FormControl(null),
      pswd: new FormControl(null),
      confirmpswd: new FormControl(null),
      dob: new FormControl(null)
    })
  }
  onSubmit() {
    console.log(this.reactiveForm,'ooooo')
    console.log('hii');
    
  }

}
