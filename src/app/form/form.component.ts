import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  demoForm:FormGroup;
  ngOnInit() {
  	this.demoForm = new FormGroup({
  		username:new FormControl('',Validators.required),
  		password:new FormControl('',Validators.required)
  	})
  }

  submit(){
  	console.log(this.demoForm.value);
  }
}
