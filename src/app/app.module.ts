import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {PartnersComponent} from './components/partners.component';
import {PapersComponent} from './components/papers.component';
import {SettingsComponent} from './components/settings.component';
import {PartnerModaleComponent} from './components/partner.modale.component';
import {PaperModaleComponent} from './components/paper.modale.component';
import {ChangePartnerModaleComponent} from './components/change.partner.modale.component';
import {ChangePaperModaleComponent} from './components/change.paper.modale.component';
import {InfoComponent} from './components/info.component';
import {IsDeleteComponent} from './components/is.delete.component';

@NgModule({
  declarations:
    [AppComponent, PartnersComponent, PapersComponent, SettingsComponent, PartnerModaleComponent, PaperModaleComponent,
      ChangePartnerModaleComponent, ChangePaperModaleComponent, InfoComponent, IsDeleteComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
