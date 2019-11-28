import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-partner-modale',
  template: `
      <div class="shadow">
          <div class="modul"><p></p>
              <input type="text" [placeholder]="placeholderName" [(ngModel)]="name" [class.badValue]="isBadName" (focus)="focusName()" (keydown.enter)="add(name, money)"><p></p>
              <input type="number" min="0" step="1" [placeholder]="placeholderMoney" [(ngModel)]="money" [class.badValue]="isBadMoney" (focus)="focusMoney()" (keydown.enter)="add(name, money)"><p></p>
              <button (click)="add(name, money)" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-border">Добавить</button>
              <button (click)="this.closeModal.emit()" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-border w3-margin-left">Назад</button>
          </div>
      </div>`,
  styleUrls: ['../styles/partners.component.css'],
  providers: []
})

export class PartnerModaleComponent {
  placeholderName: string = 'Имя';
  placeholderMoney: string = 'Сумма';
  isBadName: boolean = false;
  isBadMoney: boolean = false;
  @Output() newPartner = new EventEmitter<object>();
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
    this.newPartner.emit({name, money});
  }
  focusName(): void {
    if (this.isBadName === false ) {
      return;
    } else {
      this.isBadName = false;
      this.togglePlaceholderName();
    }
  }
  focusMoney(): void {
    if (this.isBadMoney === false ) {
      return;
    } else {
      this.isBadMoney = false;
      this.togglePlaceholderMoney();
    }
  }
  togglePlaceholderName(): void {
    (this.placeholderName === 'Имя') ? this.placeholderName = 'Введите имя' : this.placeholderName = 'Имя';
  }
  togglePlaceholderMoney(): void {
    (this.placeholderMoney === 'Сумма') ? this.placeholderMoney = 'Введите сумму' : this.placeholderMoney = 'Сумма';
  }
}
