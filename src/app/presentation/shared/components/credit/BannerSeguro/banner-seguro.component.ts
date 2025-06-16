import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-seguro',
  imports: [CommonModule],
  templateUrl: './banner-seguro.component.html',
})
export class PromoBannerComponent {
  isVisible = true;

  closeBanner() {
    this.isVisible = false;
  }
}
