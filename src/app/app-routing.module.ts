import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiddingstatsComponent } from './biddingstats/biddingstats.component';
import { PlayerstatsComponent } from './playerstats/playerstats.component';
import { TeamstatsComponent } from './teamstats/teamstats.component';

const routes: Routes = [
    {
      path:'',
      component:HomeComponent,
      pathMatch:'full'
    },
    {
      path:"biddingstats",
      component:BiddingstatsComponent
    },
    {
      path:"playerstats",
      component:PlayerstatsComponent
    },
    {
      path:"teamstats",
      component:TeamstatsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
