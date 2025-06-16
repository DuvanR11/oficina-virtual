import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-detail-credit',
  imports: [SharedModule],
  templateUrl: './detail-credit.component.html',
})
export class DetailCreditComponent {
    @Input() amount: number = 4000000;
    @Input() monthlyFee!: number;
    @Input() installments!: number;
    @Input() businessName!: string;
    @Input() economicActivity!: string;
    @Input() civilStatus!: string;
    @Input() housingType!: string;
    @Input() bank!: string;
    @Input() accountType!: string;
    @Input() accountNumber!: string;
    @Input() beneficiary!: any;

    @Output() submit = new EventEmitter<void>();
    @Output() back = new EventEmitter<void>();

    //  Modals
    showSuccessModal: boolean = false

    onSubmit() {
        this.submit.emit();
    }

    onBack() {
        this.back.emit();
    }
}
