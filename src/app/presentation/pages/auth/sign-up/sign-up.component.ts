import { Component } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: 'app-sign-up',
  imports: [SharedModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  // Modals
  showInValidationDataModal: boolean = false;
  showSendOtpModal: boolean = true;

  resolved(captchaResponse: string) { }
}
