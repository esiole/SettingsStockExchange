import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-paper-modale',
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
                  Добавить
              </button>
              <button (click)="this.closeModal.emit()" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-border w3-margin-left">Назад</button>
          </div>
      </div>`,
  styleUrls: ['../styles/papers.component.css'],
  providers: []
})

export class PaperModaleComponent {
  placeholderName: string = 'Фирма';
  placeholderMax: string = 'Макс. изменение цены';
  placeholderCount: string = 'Количество';
  placeholderPrice: string = 'Стартовая цена';
  isBadName: boolean = false;
  isBadRule: boolean = false;
  isBadMax: boolean = false;
  isBadCount: boolean = false;
  isBadPrice: boolean = false;
  @Output() newPaper = new EventEmitter<object>();
  @Output() closeModal = new EventEmitter();
  add(name: string, rule: string, max: number, count: number, startPrice: number): void {
    if (name === undefined || name === '' || isNaN(parseInt(name, 10)) === false) {
      if (this.isBadName === true) {
        return;
      }
      this.isBadName = true;
      this.togglePlaceholderName();
      return;
    }
    if (rule === undefined || rule === '') {
      if (this.isBadRule === true) {
        return;
      }
      this.isBadRule = true;
      return;
    }
    if (max === undefined || max === null || max < 0) {
      if (this.isBadMax === true) {
        return;
      }
      this.isBadMax = true;
      this.togglePlaceholderMax();
      return;
    }
    if (count === undefined || count === null || count < 0) {
      if (this.isBadCount === true) {
        return;
      }
      this.isBadCount = true;
      this.togglePlaceholderCount();
      return;
    }
    if (startPrice === undefined || startPrice === null || startPrice < 0) {
      if (this.isBadPrice === true) {
        return;
      }
      this.isBadPrice = true;
      this.togglePlaceholderPrice();
      return;
    }
    this.newPaper.emit({name, rule, max, count, startPrice});
  }
  focusName(): void {
    if (this.isBadName === false) {
      return;
    } else {
      this.isBadName = false;
      this.togglePlaceholderName();
    }
  }
  focusRule(): void {
    if (this.isBadRule === false) {
      return;
    } else {
      this.isBadRule = false;
    }
  }
  focusMax(): void {
    if (this.isBadMax === false) {
      return;
    } else {
      this.isBadMax = false;
      this.togglePlaceholderMax();
    }
  }
  focusCount(): void {
    if (this.isBadCount === false) {
      return;
    } else {
      this.isBadCount = false;
      this.togglePlaceholderCount();
    }
  }
  focusPrice(): void {
    if (this.isBadPrice === false) {
      return;
    } else {
      this.isBadPrice = false;
      this.togglePlaceholderPrice();
    }
  }
  togglePlaceholderName(): void {
    (this.placeholderName === 'Фирма') ? this.placeholderName = 'Введите название фирмы' : this.placeholderName = 'Фирма';
  }
  togglePlaceholderMax(): void {
    (this.placeholderMax === 'Макс. изменение цены') ? this.placeholderMax = 'Введите число' : this.placeholderMax = 'Макс. изменение цены';
  }
  togglePlaceholderCount(): void {
    (this.placeholderCount === 'Количество') ? this.placeholderCount = 'Введите число' : this.placeholderCount = 'Количество';
  }
  togglePlaceholderPrice(): void {
    (this.placeholderPrice === 'Стартовая цена') ? this.placeholderPrice = 'Введите число' : this.placeholderPrice = 'Стартовая цена';
  }
}
