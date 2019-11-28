import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-is-delete',
  template: `
      <div class="shadow">
          <div class="modul delete"><p></p>
              <p>Вы действительно хотите удалить <ng-content></ng-content>?</p>
              <button (click)="this.okay.emit()" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-border w3-margin">Да</button>
              <button (click)="this.back.emit()" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-border w3-margin">Нет</button>
          </div>
      </div>`,
  styleUrls: ['../styles/info.component.css'],
  providers: []
})

export class IsDeleteComponent {
  @Output() okay = new EventEmitter();
  @Output() back = new EventEmitter();
}
