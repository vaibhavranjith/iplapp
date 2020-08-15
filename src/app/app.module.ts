import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PlayerstatsComponent } from './playerstats/playerstats.component';
import { TeamstatsComponent } from './teamstats/teamstats.component';
import { BiddingstatsComponent } from './biddingstats/biddingstats.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
