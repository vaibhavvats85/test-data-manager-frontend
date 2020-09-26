import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-generate-data',
  templateUrl: './generate-data.component.html',
  styleUrls: ['./generate-data.component.scss']
})
export class GenerateDataComponent implements OnInit {
  isLinear = false;
  connectFormGroup: FormGroup
  secondFormGroup: FormGroup;
  tableDetails:any = [];
  @ViewChild('stepper', { static: false }) private myStepper: MatStepper;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  next($event) {
    this.myStepper.next();
    this.tableDetails = $event;
  }

  previous(){
    this.myStepper.previous();
  }

}
