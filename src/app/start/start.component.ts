import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  //initialise FormGroup object myForm
  startForm: FormGroup;

  //dependency injection of FormBuilder object fb
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    //TODO: this
    this.startForm = this.fb.group({
      name: ''
    })
  }

  //Function on form submit to produce alert
  onSubmit()
  {
    this.router.navigateByUrl("/main/" + this.startForm.value.name)
  }

}
