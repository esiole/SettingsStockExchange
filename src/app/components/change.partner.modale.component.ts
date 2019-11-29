import {Component, Input} from '@angular/core';
import {PartnerModaleComponent} from './partner.modale.component';

@Component({
  selector: 'app-change-partner-modale',
  templateUrl: '../templates/partnerModale.html',
  styleUrls: ['../styles/partners.component.css'],
  providers: []
})

export class ChangePartnerModaleComponent extends PartnerModaleComponent {
  okButton: string = 'Изменить';
  @Input() name: string;
  @Input() money: number;
}
