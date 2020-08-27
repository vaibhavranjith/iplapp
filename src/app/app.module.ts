import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PlayerstatsComponent } from './playerstats/playerstats.component';
import { TeamstatsComponent } from './teamstats/teamstats.component';
import { BiddingstatsComponent } from './biddingstats/biddingstats.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PlayerstatsComponent,
    TeamstatsComponent,
    BiddingstatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
