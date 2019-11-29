import {Component, Input} from '@angular/core';
import {PaperModaleComponent} from './paper.modale.component';

@Component({
  selector: 'app-change-paper-modale',
  template: `
      <div class="shadow">
          <div class="modul"><p></p>
              <input type="text" [placeholder]="placeholderName" [(ngModel)]="name" [class.badValue]="isBadName" (focus)="focusName()" (keydown.enter)="add(name, rule, max, count, startPrice)"><p></p>
              <select [(ngModel)]="rule" [class.badValue]="isBadRule" (focus)="focusRule()" (keydown.enter)="add(name, rule, max, count, startPrice)">
                  <option>равномерное распределение</option>
                  <option>нормальное распределение</option>
              </select><p></p>
              <input type="number" min="0" step="1" [placeholder]="placeholderMax" [(ngModel)]="max" [class.badValue]="isBadMax" (focus)="focusMax()" (keydown.enter)="add(name, rule, max, count, startPrice)"><p></p>
              <input type="number" min="0" step="1" [placeholder]="placeholderCount" [(ngModel)]="count" [class.badValue]="isBadCount" (focus)="focusCount()" (keydown.enter)="add(name, rule, max, count, startPrice)"><p></p>
              <input type="number" min="0" step="1" [placeholder]="placeholderPrice" [(ngModel)]="startPrice" [class.badValue]="isBadPrice" (focus)="focusPrice()" (keydown.enter)="add(name, rule, max, count, startPrice)"><p></p>
              <button (click)="add(name, rule, max, count, startPrice)" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-border">
                  Изменить
              </button>
              <button (click)="this.closeModal.emit()" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-border w3-margin-left">Назад</button>
          </div>
      </div>`,
  styleUrls: ['../styles/papers.component.css'],
  providers: []
})

export class ChangePaperModaleComponent extends PaperModaleComponent {
  @Input() name: string;
  @Input() rule: string;
  @Input() max: number;
  @Input() count: number;
  @Input() startPrice: number;
}
