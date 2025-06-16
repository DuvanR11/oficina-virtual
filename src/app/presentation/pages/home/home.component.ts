import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home',
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // Modals
  showSuccessModal: boolean = false


  certificados = [
    {
      nombre: 'Deuda Paz y Salvo',
      icono: '/svgs/icon_check-mark.svg',
      bg: 'bg-[#FFF2F0]',
    },
    {
      nombre: 'Año gravable',
      icono: '/svgs/icon_calendar.svg',
      bg: 'bg-[#E0EEFC]',
    },
    {
      nombre: 'Estado de cuenta',
      icono: '/svgs/icon_origen-fondos.svg',
      bg: 'bg-[#FCF8EA]',
    },
  ];
}
