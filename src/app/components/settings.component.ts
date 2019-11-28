import {Component} from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
      <table class="w3-table-all w3-hoverable w3-centered w3-card-4 w3-center">
          <caption><b><i>Настройки</i></b></caption>
          <tr class="w3-hover-indigo">
              <td>Время начала:</td>
              <td><input type="time" [(ngModel)]="result.start"></td>
          </tr>
          <tr class="w3-hover-indigo">
              <td>Время окончания:</td>
              <td><input type="time" [(ngModel)]="result.end"></td>
          </tr>
          <tr class="w3-hover-indigo">
              <td>Интервал пересчёта:</td>
              <td><input type="time" [(ngModel)]="result.interval"></td>
          </tr>
      </table>`,
  styleUrls: ['../styles/settings.component.css'],
  providers: []
})

export class SettingsComponent {
  result: object = {
    start:  '',
    end: '',
    interval: ''
  };
}
