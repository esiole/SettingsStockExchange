import {Component, Input} from '@angular/core';
import {PaperModaleComponent} from './paper.modale.component';

@Component({
  selector: 'app-change-paper-modale',
  templateUrl: '../templates/paperModale.html',
  styleUrls: ['../styles/papers.component.css'],
  providers: []
})

export class ChangePaperModaleComponent extends PaperModaleComponent {
  @Input() name: string;
  @Input() rule: string;
  @Input() max: number;
  @Input() count: number;
  @Input() startPrice: number;
  okButton: string = 'Изменить';
}
