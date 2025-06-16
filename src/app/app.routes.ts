import { Routes } from '@angular/router';
import { SignInComponent } from './presentation/pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from './presentation/pages/auth/sign-up/sign-up.component';
import { OtpCodeComponent } from './presentation/pages/auth/otp-code/otp-code.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { SimulatorComponent } from './presentation/pages/creditCrequest/simulator/simulator.component';
import { CreditRequestComponent } from './presentation/pages/creditCrequest/creditRequest/credit-request.component';
import { DetailCreditComponent } from './presentation/pages/creditCrequest/detailCredit/detail-credit.component';

export const routes: Routes = [
    { path: '', component: SignInComponent },
    { path: 'crear-usuario', component: SignUpComponent },
    { path: 'codigo-otp', component: OtpCodeComponent },
    { path: 'home', component: HomeComponent },

    // Credit
    { path: 'simulador', component: SimulatorComponent },
    { path: 'solicitud-credito', component: CreditRequestComponent },
    { path: 'solicitud-preapobado', component: CreditRequestComponent },
    { path: 'detalle-solicitud', component: DetailCreditComponent },
    
    
    
];
