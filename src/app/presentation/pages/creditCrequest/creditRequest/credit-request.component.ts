import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-credit-request',
  imports: [SharedModule],
  templateUrl: './credit-request.component.html',
})
export class CreditRequestComponent implements OnInit {
  @Input() monto: number = 0;
  @Input() plazo: number = 0;
  @Input() cuotaMensual: number = 0;

  @Output() regresar = new EventEmitter<void>();
  @Output() continuar = new EventEmitter<{ estadoCivil: string, tipoVivienda: string }>();

  form!: FormGroup;

  currentStep = 3;

  // Modals
  showSumPercentageModal: boolean = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      estadoCivil: ['', Validators.required],
      tipoVivienda: ['', Validators.required]
    });
  }

  onRegresar(): void {
    this.regresar.emit();
  }

  onContinuar(): void {
    if (this.form.valid) {
      this.continuar.emit(this.form.value);
    }
  }

  get esValido(): boolean {
    return this.form.valid;
  }
}
