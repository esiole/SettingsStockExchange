import {Component, EventEmitter, Output} from '@angular/core';
import {Partner} from '../classes/Partner';

@Component({
  selector: 'app-partner-modale',
  templateUrl: '../templates/partnerModale.html',
  styleUrls: ['../styles/partners.component.css'],
  providers: []
})

export class PartnerModaleComponent {
  name: string;
  money: number;
  okButton: string = 'Добавить';
  placeholderName: string = 'Имя';
  placeholderMoney: string = 'Сумма';
  isBadName: boolean = false;
  isBadMoney: boolean = false;
  @Output() partner = new EventEmitter<Partner>();
  @Output() closeModal = new EventEmitter();
  add(name: string, money: number): void {
    if (name === undefined || name === '' || isNaN(parseInt(name, 10)) === false) {
      if (this.isBadName === true) {
        return;
      }
      this.isBadName = true;
      this.togglePlaceholderName();
      return;
    }
    if (money === undefined || money === null || money < 0) {
      if (this.isBadMoney === true) {
        return;
      }
      this.isBadMoney = true;
      this.togglePlaceholderMoney();
      return;
    }
    this.partner.emit(new Partner(name, money));
  }
  focusName(): void {
    if (this.isBadName === false) {
      return;
    } else {
      this.isBadName = false;
      this.togglePlaceholderName();
    }
  }
  focusMoney(): void {
    if (this.isBadMoney === false) {
      return;
    } else {
      this.isBadMoney = false;
      this.togglePlaceholderMoney();
    }
  }
  togglePlaceholderName(): void { (this.placeholderName === 'Имя') ? this.placeholderName = 'Введите имя' : this.placeholderName = 'Имя'; }
  togglePlaceholderMoney(): void { (this.placeholderMoney === 'Сумма') ? this.placeholderMoney = 'Введите сумму' : this.placeholderMoney = 'Сумма'; }
}
