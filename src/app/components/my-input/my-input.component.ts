import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})
export class MyInputComponent implements OnInit {
  @Input() value: string;
  @Input() disabled: boolean;
  @Input() error: boolean;
  @Input() errorMessage: string;
  @Input() formControl = new FormControl()

  constructor() { }

  ngOnInit(): void {
  }

}
