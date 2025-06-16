import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  imports: [CommonModule],
  templateUrl: './acordion-credit.component.html',
  styleUrl: './acordion-credit.component.scss'
})
export class AcordionCreditComponent {
  @Input() titulo!: string;
  @Input() icono!: string;

  isOpen = false;

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}
