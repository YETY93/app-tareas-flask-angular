import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  anexarTarea!: FormGroup;

  submitForm(): void {
}

resetForm():void{
  this.anexarTarea.reset();
}
  constructor( private formBuilder : FormBuilder) {
    

  }


  
  ngOnInit(): void {

    

  }
}
