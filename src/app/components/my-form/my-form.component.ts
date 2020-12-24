import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
  public currentForm = new FormGroup({});
  public form: FormBuilder;
  public errorMessage = 'Error Message'
  public firstInput: FormControl;
  public secondInput: FormControl;
  public thirdInput: FormControl;
  public fourthInput: FormControl;
  public fivesInput: FormControl;
  constructor(
  ) {}


  ngOnInit(): void  {
    this.initForm()
  }
  public initForm(): void {
    this.firstInput = new FormControl('', [Validators.required]);
    this.secondInput = new FormControl('', [Validators.required]);
    this.thirdInput = new FormControl('', [Validators.required]);
    this.fourthInput = new FormControl('', [Validators.required]);
    this.fivesInput = new FormControl('', [Validators.required]);
    this.currentForm.addControl('first-control', this.firstInput);
    this.currentForm.addControl('second-control', this.secondInput);
    this.currentForm.addControl('third-control', this.thirdInput);
    this.currentForm.addControl('fourth-control', this.fourthInput);
    this.currentForm.addControl('fives-control', this.fivesInput);
  }

  public next(value: any) {

  }
}
