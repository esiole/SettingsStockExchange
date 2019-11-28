import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PartnerModaleComponent} from './partner.modale.component';

@Component({
  selector: 'app-change-partner-modale',
  template: `
      <div class="shadow">
          <div class="modul"><p></p>
              <input type="text" [placeholder]="placeholderName" [(ngModel)]="name" [class.badValue]="isBadName" (focus)="focusName()"><p></p>
              <input type="number" min="0" step="1" [placeholder]="placeholderMoney" [(ngModel)]="money" [class.badValue]="isBadMoney" (focus)="focusMoney()"><p></p>
              <button (click)="add(name, money)" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-border">Изменить</button>
              <button (click)="this.closeModal.emit()" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-border w3-margin-left">Назад</button>
          </div>
      </div>`,
  styleUrls: ['../styles/partners.component.css'],
  providers: []
})

export class ChangePartnerModaleComponent extends PartnerModaleComponent {
  @Input() name: string;
  @Input() money: number;
}
