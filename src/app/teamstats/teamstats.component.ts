import { Component, OnInit } from '@angular/core';
import { IplService } from './../ipl.service'
import { Team } from '../shared/model/team.model'
import { TeamAmount } from '../shared/model/teamamount.model'
import { GoogleChartInterface } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
@Component({
  selector: 'app-teamstats',
  templateUrl: './teamstats.component.html',
  styleUrls: ['./teamstats.component.css']
})
export class TeamstatsComponent implements OnInit {
  teams: Team[] = [];
  bargraphstatus: boolean;
  teamAmount: TeamAmount[] = [];
  piestatus: boolean;


  constructor(private iplservice: IplService) { }
  ngOnInit(): void {
    this.piestatus = false;
    this.bargraphstatus = false;
    this.iplservice.teamDetails().subscribe(res => this.teams = res);
    this.iplservice.teamAmountDetails().subscribe(res => {
      this.teamAmount = res;
      const chartData: any = [['Team name', 'Amount', { role: 'style' }]];
      for (let t of this.teamAmount) {
        chartData.push([t.teamName, t.amount, 'color:#e6693e']);
      }
      console.log(chartData);
      this.drawChart(chartData);
    });

  }

  drawChart(chartData) {
    this.bargraphstatus = true;
    this.barChart = {
      chartType: 'BarChart',
      dataTable: chartData,
      //firstRowIsData: true,
      options: {
        animation: {
          duration: 2000,
          easing: 'out',
          startup: true
        },
        // color:'#e0440e',
        title: "Amount spent by each team",
        width: 500,
        height: 500,
        backgroundColor: {
            fill: 'transparent'
        },
        bar: { groupWidth: "95%" },
        legend: { position: "none", text2tyle: { color: 'white', fontSize: 14 } },
        annotations: {
          textStyle: {
            fontName: 'Times-Roman',
            fontSize: 15,
            bold: false,
            italic: true,
            // The color of the text.
            color: 'white',
            // The color of the text outline.
            //   auraColor: '#d799ae',
            // The transparency of the text.
            opacity: 0.8
          }
        },
        // hAxes:{
        //     0:{
        //         textStyle:{color:'white'}
        //     },
        //     1:{
        //         textStyle:{color:'white'}
        //     },
        // },
        // titleTextStyle:{
        //     color:'white'
        // },
        // vAxis:{
        //     textStyle:{
        //         color:'white'
        //     }
        // }
        tooltip:{
          textStyle:{
            color:'burlywood'
          }
  }
      },
    };
  }

  drawpie(data) {
    this.piestatus = true;
    console.log(data);
    this.pieChart = {
      chartType: 'PieChart',
      dataTable: data,
      //firstRowIsData: true,
      options: {
        'title': 'Composition', 'height': '500', 'width': '530', colors: ['#e0440e', 'burlywood', '#008B8B', '#A9A9A9'],
        tooltip: {
          textStyle: {
            color: 'burlywood'
          }
        },
        backgroundColor: {
          fill: 'transparent'
        }
      },
      
    };
  }

  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: null,
    //firstRowIsData: true,
    options: { 'title': 'Tasks' },
  };

  public barChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: null,
    //firstRowIsData: true,
    options: { 'title': 'Tasks', },
  };

  public select(event: ChartSelectEvent) {
    // your logic
    this.piestatus = false;
    let team = event.selectedRowValues[0];
    this.iplservice.amountbyrole(team).subscribe(res => {
      console.log(res)
      const piedata: any = [["Role", "amount"]];
      for (let a of res) {
        piedata.push([a.roleName, a.amount]);
      }
      this.drawpie(piedata);
    });
  }

}
