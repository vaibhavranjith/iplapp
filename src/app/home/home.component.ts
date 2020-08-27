import { Component, OnInit } from '@angular/core';
import { Team } from './../shared/model/team.model';
import {IplService} from '../ipl.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teams:Team[]=[];
  

  constructor(private iplservice:IplService) { }

  ngOnInit(): void {
    this.iplservice.teamDetails().subscribe(res=>{
      this.teams = res;
    })
  }

}
