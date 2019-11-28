import {Component, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PartnerService} from './services/partner.service';
import {PaperService} from './services/paper.service';
import {SettingsComponent} from './components/settings.component';

@Component({
  selector: 'app-root',
  template: `
      <h1><b><i>Биржа акций</i></b></h1>
      <button (click)="startSetting()" *ngIf="isStartButton" class="w3-btn w3-round-large w3-jumbo w3-indigo w3-hover-khaki w3-border" id="startButton"><b>Начать настройку</b></button>
      <div *ngIf="isFirstPage">
          <app-partners></app-partners>
          <button (click)="toSecondPage()" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-xlarge w3-margin-top w3-border systemButton">
              Продолжить
          </button>
      </div>
      <div *ngIf="isSecondPage">
          <app-papers></app-papers>
          <button (click)="toThirdPage()" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-xlarge w3-margin-top w3-border systemButton">
              Продолжить
          </button>
      </div>
      <div *ngIf="isThirdPage">
          <app-settings></app-settings>
          <button (click)="toEnd()" class="w3-btn w3-indigo w3-hover-khaki w3-round-xxlarge w3-xlarge w3-margin-top w3-border systemButton">
              Завершить
          </button>
      </div>
      <div *ngIf="isEnd">
          <p>Настройки сохранены в JSON файл!</p>
      </div>
      <app-info *ngIf="isInfo" (back)="isInfo=false">{{messageInfo}}</app-info>`,
  styleUrls: ['./styles/app.component.css'],
  providers: [PartnerService, PaperService]
})

export class AppComponent {
  isStartButton: boolean = true;
  isFirstPage: boolean = false;
  isSecondPage: boolean = false;
  isThirdPage: boolean = false;
  isEnd: boolean = false;
  isInfo: boolean = false;
  messageInfo: string;
  @ViewChild(SettingsComponent, {static: false}) viewChild: SettingsComponent;
  constructor(private partnerService: PartnerService, private paperService: PaperService, private http: HttpClient) {}
  startSetting(): void {
    this.isStartButton = false;
    this.isFirstPage = true;
  }
  toSecondPage(): void {
    if (this.partnerService.length() === 0) {
      this.messageInfo = 'Нет ни одного участника!';
      this.isInfo = true;
      return;
    }
    this.isFirstPage = false;
    this.isSecondPage = true;
  }
  toThirdPage(): void {
    if (this.paperService.length() === 0) {
      this.messageInfo = 'Нет ни одной акции!';
      this.isInfo = true;
      return;
    }
    this.isSecondPage = false;
    this.isThirdPage = true;
  }
  toEnd(): void {
    // @ts-ignore
    if (this.viewChild.result.start === '' || this.viewChild.result.end === '' || this.viewChild.result.interval === '') {
      this.messageInfo = 'Заданы не все настройки!';
      this.isInfo = true;
      return;
    }
    this.isThirdPage = false;
    this.isEnd = true;
    this.req();
  }
  req(): void {
    this.http.post('http://localhost:3000/print', {partners: this.partnerService.getData(), papers: this.paperService.getData(), settings: this.viewChild.result}).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }
}
