import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radio-btn',
  templateUrl: './my-radio-btn.component.html',
  styleUrls: ['./my-radio-btn.component.scss']
})
export class MyRadioBtnComponent implements OnInit {
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.disabled)
  }

}
