import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
      <div class="shadow">
          <div class="modul info minSize"><p></p>
              <p><ng-content></ng-content></p>
              <button (click)="this.back.emit()" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-border">Ок</button><p></p>
          </div>
      </div>`,
  styleUrls: ['../styles/info.component.css'],
  providers: []
})

export class InfoComponent {
  @Output() back = new EventEmitter();
}
