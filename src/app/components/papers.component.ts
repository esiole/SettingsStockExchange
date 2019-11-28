import {Component, OnInit} from '@angular/core';
import {PaperService} from '../services/paper.service';
import {Paper} from '../classes/Paper';

@Component({
  selector: 'app-papers',
  template: `
      <table class="w3-table-all w3-hoverable w3-centered w3-card-4 w3-center">
          <caption><b><i>Акции</i></b></caption>
          <tr class="w3-indigo">
              <td><b>Фирма</b></td>
              <td><b>Правило изменения</b></td>
              <td><b>Максимальное значение для изменения</b></td>
              <td><b>Количество</b></td>
              <td><b>Начальная стоимость одной</b></td>
              <td><b>Функции</b></td>
          </tr>
          <tr *ngFor="let element of papers" class="w3-hover-khaki">
              <td>{{element.name}}</td>
              <td>{{element.rule}}</td>
              <td>{{element.max}}</td>
              <td>{{element.count}}</td>
              <td>{{element.startPrice}}</td>
              <td>
                  <button (click)="changePaper($event.target)" title="Редактировать акцию" class="w3-button w3-hover-indigo">
                      <i class="fa fa-pencil fa-fw"></i>
                  </button>
                  <button (click)="deletePaper($event.target)" title="Удалить акцию" class="w3-button w3-hover-indigo">
                      <i class="fa fa-trash-o fa-lg"></i>
                  </button>
              </td>
          </tr>
      </table>
      <button (click)="add()" class="w3-btn w3-indigo w3-hover-khaki w3-margin-top w3-margin-right w3-xlarge w3-round-xxlarge w3-border">
          Добавить
      </button>
      <app-paper-modale *ngIf="isAddPaper" (newPaper)="newPaperEvent($event)" (closeModal)="this.isAddPaper=false"></app-paper-modale>
      <app-change-paper-modale *ngIf="isChangePaper" (closeModal)="isChangePaper=false" (changePaper)="changePaperEvent($event)">
      </app-change-paper-modale>
      <app-is-delete *ngIf="isDelete" (okay)="this.paperService.deleteData(deleteValue); isDelete=false;" (back)="isDelete=false">
          эту акцию
      </app-is-delete>
      <app-info *ngIf="isInfo" (back)="isInfo=false">Акция с таким именем уже есть!</app-info>`,
  styleUrls: ['../styles/papers.component.css'],
  providers: []
})

export class PapersComponent implements OnInit {
  isAddPaper: boolean = false;
  isChangePaper: boolean = false;
  changePaperName: string;
  isDelete: boolean = false;
  isInfo: boolean = false;
  deleteValue: string;
  papers: Paper[];
  constructor(private paperService: PaperService) {}
  ngOnInit(): void {
    this.papers = this.paperService.getData();
  }
  add(): void { this.isAddPaper = true; }
  newPaperEvent(value: object): void {
    // @ts-ignore
    if (this.paperService.find(value.name)) {
      this.isInfo = true;
      return;
    }
    this.isAddPaper = false;
    // @ts-ignore
    this.paperService.addData(value.name, value.rule, value.max, value.count, value.startPrice);
  }
  deletePaper(event): void {
    this.isDelete = true;
    this.deleteValue = event.closest('tr').firstChild.innerHTML;
  }
  changePaper(event): void {
    this.isChangePaper = true;
    this.changePaperName = event.closest('tr').firstChild.innerHTML;
  }
  changePaperEvent(value: object): void {
    this.isChangePaper = false;
    // @ts-ignore
    this.paperService.change(this.changePaperName, value.name, value.rule, value.max, value.count, value.startPrice);
  }
}
