import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() type: 'error' | 'success' | 'warning' | 'info' = 'error';
  @Input() message: string = '';
  @Input() strongText: string = '¡Atención!';
}
