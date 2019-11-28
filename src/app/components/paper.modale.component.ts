import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-paper-modale',
  template: `
      <div class="shadow">
          <div class="modul"><p></p>
              <input type="text" placeholder="Фирма" [(ngModel)]="name"><p></p>
              <select [(ngModel)]="rule" >
                  <option>равномерное распределение</option>
                  <option>нормальное распределение</option>
              </select><p></p>
              <input type="number" min="0" step="1" placeholder="Максимальное изменение цены" [(ngModel)]="max"><p></p>
              <input type="number" min="0" step="1" placeholder="Количество" [(ngModel)]="count"><p></p>
              <input type="number" min="0" step="1" placeholder="Стартовая цена" [(ngModel)]="startPrice"><p></p>
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
  @Output() newPaper = new EventEmitter<object>();
  @Output() closeModal = new EventEmitter();
  add(name: string, rule: string, max: number, count: number, startPrice: number): void {
    if (name === undefined || rule === undefined || max === undefined || count === undefined || startPrice === undefined
      || name === '' || rule === '' || max === null || count === null || startPrice === null) {
      window.alert('Введены не все данные!');
      return;
    }
    this.newPaper.emit({name, rule, max, count, startPrice});
  }
}
