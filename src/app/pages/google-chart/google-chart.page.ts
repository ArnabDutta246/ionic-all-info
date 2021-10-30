import { Component, OnInit } from '@angular/core';
import { PieChartData } from './defaultData';
import { ChartColumn } from './googleChart.modal';
declare var google;
@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.page.html',
  styleUrls: ['./google-chart.page.scss'],
})
export class GoogleChartPage implements OnInit {
  // colors array
  colorsArray:string[] = ["red","orange","green","skyblue","violate","navy","yellow","brown","grey"];
  dynamicColumnData:ChartColumn = PieChartData;
  constructor() { }

  ngOnInit() {
    this.initChart(this.drawChart.bind(this));
  }


   // Initiate the chart
   initChart(callBackFun:Function){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(callBackFun);
   }

   dynamicColumnAdd(data:ChartColumn){}

   drawChart(){
    // create table
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    // insert data
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],,
      ['Pepperoni', 2]
    ]);
    // set options
    var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};
    // draw in specific div id
    var chart = new google.visualization.PieChart(document.getElementById('pie_chart_div'));
        chart.draw(data, options)
   }
  // column chart
  // donut chart
  // bar chart 
  // combo chart
}
