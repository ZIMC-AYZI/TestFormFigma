import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})
export class MyInputComponent {
  @Input() value: string;
  @Input() isDisabled: boolean;
  @Input() error: boolean;
  @Input() errorMessage: string;
  @Input() formControl = new FormControl();

  public resetValue(): void {
    this.formControl.reset();
  }
}
