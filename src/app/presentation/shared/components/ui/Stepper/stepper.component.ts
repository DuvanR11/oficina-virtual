import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
})
export class StepperComponent {
  @Input() steps: { label: string }[] = [];
  @Input() currentStep: number = 1;
}
