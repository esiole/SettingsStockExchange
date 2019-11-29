import {Component, EventEmitter, Output} from '@angular/core';
import {Paper} from '../classes/Paper';

@Component({
  selector: 'app-paper-modale',
  templateUrl: '../templates/paperModale.html',
  styleUrls: ['../styles/papers.component.css'],
  providers: []
})

export class PaperModaleComponent {
  name: string;
  rule: string;
  max: number;
  count: number;
  startPrice: number;
  okButton: string = 'Добавить';
  placeholderName: string = 'Фирма';
  placeholderMax: string = 'Макс. изменение цены';
  placeholderCount: string = 'Количество';
  placeholderPrice: string = 'Стартовая цена';
  isBadName: boolean = false;
  isBadRule: boolean = false;
  isBadMax: boolean = false;
  isBadCount: boolean = false;
  isBadPrice: boolean = false;
  @Output() paper = new EventEmitter<Paper>();
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
    this.paper.emit(new Paper(name, rule, max, count, startPrice));
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
  togglePlaceholderName(): void { (this.placeholderName === 'Фирма') ? this.placeholderName = 'Введите название фирмы' : this.placeholderName = 'Фирма'; }
  togglePlaceholderMax(): void { (this.placeholderMax === 'Макс. изменение цены') ? this.placeholderMax = 'Введите число' : this.placeholderMax = 'Макс. изменение цены'; }
  togglePlaceholderCount(): void { (this.placeholderCount === 'Количество') ? this.placeholderCount = 'Введите число' : this.placeholderCount = 'Количество'; }
  togglePlaceholderPrice(): void { (this.placeholderPrice === 'Стартовая цена') ? this.placeholderPrice = 'Введите число' : this.placeholderPrice = 'Стартовая цена'; }
}
