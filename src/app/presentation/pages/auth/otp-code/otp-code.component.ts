import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-otp-code',
  imports: [SharedModule],
  templateUrl: './otp-code.component.html',
  styleUrl: './otp-code.component.scss'
})
export class OtpCodeComponent {

  // Modals
  showSuccessModal: boolean = false
}
