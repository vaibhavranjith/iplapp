import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service'
import { Player } from '../shared/model/player.model'
import { FormControl } from '@angular/forms'
import { GoogleChartInterface } from 'ng2-google-charts';
import { rolecount } from '../shared/model/rolecount.model';
import { ChartSelectEvent } from 'ng2-google-charts'; 
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-playerstats',
  templateUrl: './playerstats.component.html',
  styleUrls: ['./playerstats.component.css']
})
export class PlayerstatsComponent implements OnInit {
  playerControl = new FormControl();
  players: Player[];
  teamQuery;
  piestatus:boolean;
  selroleplayers:Player[];
  pieselected:boolean;
  showspinner:boolean;
  constructor(private iplservice: IplService) { }
  ngOnInit(): void {
    this.showspinner=false;
    this.teamQuery="MI";
    this.pieselected=false;
    this.piestatus=false;
    this.iplservice.playerDetailsbyteam("MI").subscribe(res => {
      this.players = res;
    });
    this.iplservice.rolecountbyteam("MI").subscribe(res=>{
      const chartData:any=[["Role","Count"]];
      for(let r of res){
        chartData.push([r.roleName,r.count]);
      }
      this.drawChart(chartData);
    });
  }

   
  getPlayer() {
    this.showspinner=false;
    this.piestatus=false;
    this.pieselected=false;
    this.iplservice.playerDetailsbyteam(this.teamQuery).subscribe(res => {
      this.players = res;
    });
    this.iplservice.rolecountbyteam(this.teamQuery).subscribe(res=>{
      console.log(res);
      const chartData:any=[["Role","Count"]];
      for(let r of res){
        chartData.push([r.roleName,r.count]);
      }
      this.drawChart(chartData);
    });
    
  }

  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: null,
    //firstRowIsData: true,
    options: {'title': 'Composition',colors: ['#e0440e', '#e6693e', '#ec8f6e', 'cyan'],pieHole: 0.4,},
  };

  drawChart(chartData) {
    this.showspinner=true;
    this.piestatus=true;
    console.log(chartData);
    this.pieChart = {
      chartType: 'PieChart',
      dataTable: chartData,
      //firstRowIsData: true,
      options: {'title': 'Composition','height':'500',
      'width':'550',
      colors: ['#e0440e', 'burlywood', '#008B8B', '#A9A9A9'],
      tooltip:{
              textStyle:{
                color:'burlywood'
              }
      },
      backgroundColor: {
        fill: 'transparent'
      }
    }
  }
}
  public select(event: ChartSelectEvent) {
      this.pieselected=true;
      let role=event.selectedRowValues[0];
      this.iplservice.playersbyteamandrole(this.teamQuery,role).subscribe(res=>{console.log(res)
      this.selroleplayers=res;});
  }




}

