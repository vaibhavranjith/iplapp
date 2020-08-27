import { Component, OnInit } from '@angular/core';
import {IplService} from '../ipl.service'
import {maxplayer} from '../shared/model/maxplayer.model'
import { FormControl } from '@angular/forms';
import {Player} from '../shared/model/player.model'
@Component({
  selector: 'app-biddingstats',
  templateUrl: './biddingstats.component.html',
  styleUrls: ['./biddingstats.component.css']
})
export class BiddingstatsComponent implements OnInit {

  maxplayers:maxplayer[];
  constructor(private iplservice:IplService) { }
  searchname:string;
  searchres:Player[];
  ngOnInit(): void {
    this.iplservice.maxplayerbyrole().subscribe(res=>{
        console.log(res);
        this.maxplayers=res;  
    });
  }

  searchf(){
    this.iplservice.searchplayer(this.searchname).subscribe(res=>{
      console.log(res);
      this.searchres=res;
    })
  }

}
