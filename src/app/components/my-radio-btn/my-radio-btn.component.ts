import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-radio-btn',
  templateUrl: './my-radio-btn.component.html',
  styleUrls: ['./my-radio-btn.component.scss']
})
export class MyRadioBtnComponent {
  @Input() disabled: boolean;

}
