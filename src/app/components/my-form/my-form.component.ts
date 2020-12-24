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
  public errorMessage = 'Error Message';
  public firstInput: FormControl;
  public secondInput: FormControl;
  public thirdInput: FormControl;
  public fourthInput: FormControl;
  public fivesInput: FormControl;
  public disabled = true;
  public error: boolean;
  constructor(
  ) {}


  ngOnInit(): void  {
    this.initForm()
    Object.keys(this.currentForm.controls).forEach((el) => {
      this.currentForm.controls[el].setErrors({notValid : false})
    });
    console.log(this.currentForm.controls)
  }
  public initForm(): void {
    this.firstInput = new FormControl('');

    this.secondInput = new FormControl({value: '', disabled: true });

    this.thirdInput = new FormControl('');

    this.fourthInput = new FormControl('');

    this.fivesInput = new FormControl( '');

    this.currentForm.addControl('first-control', this.firstInput);
    this.currentForm.addControl('second-control', this.secondInput);
    this.currentForm.addControl('third-control', this.thirdInput);
    this.currentForm.addControl('fourth-control', this.fourthInput);
    this.currentForm.addControl('fives-control', this.fivesInput);
  }

  public submitForm():void {
    Object.keys(this.currentForm.controls).forEach((el) => {
      if (!this.currentForm.controls[el].value) {
        this.currentForm.controls[el].setErrors({notValid : true})
      } else {
        this.currentForm.controls[el].setErrors({notValid : false})
      }
    })
  }
}
