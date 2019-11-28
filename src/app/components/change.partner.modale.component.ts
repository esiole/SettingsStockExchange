import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-change-partner-modale',
  template: `
      <div class="shadow">
          <div class="modul"><p></p>
              <input type="text" placeholder="Имя участника" [(ngModel)]="name"><p></p>
              <input type="number" min="0" step="1" placeholder="Запас средcтв" [(ngModel)]="money"><p></p>
              <button (click)="add(name, money)" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-border">Изменить</button><p></p>
              <button (click)="this.closeModal.emit()" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-border">Назад</button>
          </div>
      </div>`,
  styleUrls: ['../styles/partners.component.css'],
  providers: []
})

export class ChangePartnerModaleComponent {
  @Output() changePartner = new EventEmitter<object>();
  @Output() closeModal = new EventEmitter();
  @Input() name: string;
  @Input() money: number;
  add(name: string, money: number): void {
    if (name === undefined || money === undefined || name === '' || money === null) {
      window.alert('Введены не все данные!');
      return;
    }
    if (money < 0) {
      window.alert('Запас денежных средств не может быть отрицательным!');
      return;
    }
    this.changePartner.emit({name, money});
  }
}
