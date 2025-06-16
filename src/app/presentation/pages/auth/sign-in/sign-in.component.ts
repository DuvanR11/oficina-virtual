import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InteractuarUseCase } from '../../../../application/use-cases/interactuar.usecase';
import { CommonModule } from '@angular/common';
import { InteractuarHttpRepository } from '../../../../infrastructure/repositories/interactuar-http.repository';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedModule],
  standalone: true,
  providers: [
    {
      provide: InteractuarUseCase,
      useFactory: (repo: InteractuarHttpRepository) => new InteractuarUseCase(repo),
      deps: [InteractuarHttpRepository],
    },
    InteractuarHttpRepository,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  // Modals
  showBrowserErrorModal: boolean = false
  
  form: FormGroup;

  constructor(private fb: FormBuilder, private interactuarUseCase: InteractuarUseCase) {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  async login() {
    const { email, password } = this.form.value;
    console.log(email)
    const response = await this.interactuarUseCase.login({ email, password });
    console.log('Token:', response.token);
    // guardar token, redirigir, etc.
  }
}
