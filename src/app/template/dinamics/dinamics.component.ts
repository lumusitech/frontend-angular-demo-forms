import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  save(): void{
    console.log(this.myForm);
    this.myForm.reset();
  }

}
