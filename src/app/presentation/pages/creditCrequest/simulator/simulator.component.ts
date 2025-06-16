import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-simulator',
  imports: [SharedModule],
  templateUrl: './simulator.component.html',
})
export class SimulatorComponent {

  //Modals
  showRequestModal: boolean = true;

  montoSolicitado: number | null = null;
  plazoMeses: number | null = null;

  simularCredito(): void {
    if (this.montoSolicitado == null || this.plazoMeses == null) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    // Aquí podrías hacer la lógica de simulación, como un llamado al backend o un cálculo local.
    console.log('Simulación ejecutada con:');
    console.log('Monto solicitado:', this.montoSolicitado);
    console.log('Plazo (meses):', this.plazoMeses);
  }
}
