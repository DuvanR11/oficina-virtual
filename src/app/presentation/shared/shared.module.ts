import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { ModalComponent } from './components/ui/Modal/modal.component';
import { AlertComponent } from './components/ui/Alert/alert.component';
import { AcordionCreditComponent } from './components/credit/AcordionCredit/acordion-credit.component';
import { PromoBannerComponent } from './components/credit/BannerSeguro/banner-seguro.component';
import { StepperComponent } from './components/ui/Stepper/stepper.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    ModalComponent,
    AlertComponent,
    AcordionCreditComponent,
    PromoBannerComponent,
    StepperComponent
  ],
  declarations: [],
  exports:[
    CommonModule,
    HeaderComponent,
    ModalComponent,
    AlertComponent,
    AcordionCreditComponent,
    PromoBannerComponent,
    StepperComponent
  ],
  providers: []
})

export class SharedModule {}
