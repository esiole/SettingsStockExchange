import {Component, OnInit} from '@angular/core';
import {Partner} from '../classes/Partner';
import {PartnerService} from '../services/partner.service';

@Component({
  selector: 'app-partners',
  template: `
      <table class="w3-table-all w3-hoverable w3-centered w3-card-4 w3-center">
          <caption><b><i>Участники</i></b></caption>
          <tr class="w3-indigo">
              <td><b>Имя</b></td>
              <td><b>Деньги</b></td>
              <td><b>Функции</b></td>
          </tr>
          <tr *ngFor="let element of partners" class="w3-hover-khaki">
              <td>{{element.name}}</td>
              <td>{{element.money}}</td>
              <td>
                  <button (click)="changePartner($event.target)" title="Редактировать участника" class="w3-button w3-hover-indigo">
                      <i class="fa fa-pencil fa-fw"></i>
                  </button>
                  <button (click)="deletePartner($event.target)" title="Удалить участника" class="w3-button w3-hover-indigo">
                      <i class="fa fa-trash-o fa-lg"></i>
                  </button>
              </td>
          </tr>
      </table>
      <button (click)="add()" class="w3-btn w3-indigo w3-hover-khaki w3-margin-top w3-margin-right w3-xlarge w3-round-xxlarge w3-border systemButton">
          Добавить
      </button>
      <app-partner-modale *ngIf="isAddPartner" (partner)="newPartnerEvent($event)" (closeModal)="isAddPartner=false">
      </app-partner-modale>
      <app-change-partner-modale *ngIf="isChangePartner" (partner)="changePartnerEvent($event)" (closeModal)="isChangePartner=false" [name]="changeValue.name" [money]="changeValue.money"></app-change-partner-modale>
      <app-is-delete *ngIf="isDelete" (okay)="this.partnerService.deleteData(deleteValue); isDelete=false;" (back)="isDelete=false">
          этого участника
      </app-is-delete>
      <app-info *ngIf="isInfo" (back)="isInfo=false">Участник с таким именем уже есть!</app-info>`,
  styleUrls: ['../styles/partners.component.css'],
  providers: []
})

export class PartnersComponent implements OnInit {
  isAddPartner: boolean = false;
  isChangePartner: boolean = false;
  isDelete: boolean = false;
  deleteValue: string;
  changePartnerName: string;
  isInfo: boolean = false;
  partners: Partner[];
  changeValue: Partner = new Partner('', 0);
  constructor(private partnerService: PartnerService) {}
  ngOnInit(): void { this.partners = this.partnerService.getData(); }
  add(): void { this.isAddPartner = true; }
  newPartnerEvent(value: Partner): void {
    if (this.partnerService.find(value.name)) {
      this.isInfo = true;
      return;
    }
    this.isAddPartner = false;
    this.partnerService.addData(value.name, value.money);
  }
  deletePartner(event): void {
    this.isDelete = true;
    this.deleteValue = event.closest('tr').firstChild.innerHTML;
  }
  changePartner(event): void {
    const tr = event.closest('tr');
    this.changeValue.name = tr.children[0].innerHTML;
    this.changeValue.money = tr.children[1].innerHTML;
    this.isChangePartner = true;
    this.changePartnerName = tr.firstChild.innerHTML;
  }
  changePartnerEvent(value: Partner): void {
    this.isChangePartner = false;
    this.partnerService.change(this.changePartnerName, value.name, value.money);
  }
}
