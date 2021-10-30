import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ChartOptionDefault, BarChartData, ColumnBarChartData, StackBarChartData, StackColumnChartData, PieChartOptions, PieChartData, DonutPieChartOptions, DonutPieChartData } from './defaultData';
import { ChartDataObj, ChartOptions, ChartTypes } from './googleChart.modal';
declare var google;
@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.page.html',
  styleUrls: ['./google-chart.page.scss'],
})
export class GoogleChartPage implements OnInit {
  // colors array
  colorsArray:string[] = ["red","orange","green","skyblue","violate","navy","yellow","brown","grey"];
  // style options
  chartOptions:ChartOptions = ChartOptionDefault; 
  pieChartOptions:ChartOptions = PieChartOptions;
  donutPieChartOptions:ChartOptions = DonutPieChartOptions;
  // custom data
  dynamicColumnData:ChartDataObj = BarChartData;
  barChartData:ChartDataObj = BarChartData;
  columnChartData:ChartDataObj = ColumnBarChartData;
  stackChartData:ChartDataObj = StackBarChartData;
  stackColumnData:ChartDataObj = StackColumnChartData;
  pieChartData:ChartDataObj = PieChartData;
  donutPieChartData:ChartDataObj = DonutPieChartData;
  constructor(private platform:Platform) { }

  ngOnInit() {
   // pie chart
   this.drawChart(this.pieChartData); 
   // donut chart
   this.drawChart(this.donutPieChartData); 
   // bar chart
    this.drawChart(this.barChartData);
   // colum bar chart
    this.drawChart(this.columnChartData);
   // stack bar chart
   this.drawChart(this.stackChartData);
   // stack column chart
   this.drawChart(this.stackColumnData);
  }


   // Initiate the chart
   initChart(callBackFun:Function){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(callBackFun);
   }
   // dynamicColumAdd
   dynamicColumnAdd(data:ChartDataObj){
     let dataCartArry = [];
     const { dataBaseColumnName,dataValueColumnsName,annotation,style,dataArray } = data;
     if(dataValueColumnsName && dataValueColumnsName.length > 0){
       dataCartArry.push([dataBaseColumnName,...dataValueColumnsName]);

      // data arrangement
      let roles = [];
      if(style){
       dataCartArry[0].push({role:"style"});
      }
      if(annotation){
        dataCartArry[0].push({role:"annotation"});
      }
      dataArray.forEach(data=>{
        if(style){
          roles.push(this.colorShemaAdd());
         }
         if(annotation){
          roles.push("");
         }
         roles.length > 0?
         dataCartArry.push([data[dataBaseColumnName],...this.multipleValueColumnAdd(data,dataValueColumnsName),...roles]):
        dataCartArry.push([data[dataBaseColumnName],...this.multipleValueColumnAdd(data,dataValueColumnsName)]);

        roles = [];
      })
     }

     console.log("finally 2D data array will",dataCartArry);
     return dataCartArry;
   }
   
   // multiple value columns add
   multipleValueColumnAdd(data,dataValueColumnsName:any[],annotaion:boolean = true):any[]{
    if(dataValueColumnsName.length == 1){
     return [data[dataValueColumnsName[0]]];
    }else{
      return dataValueColumnsName.map(column=>data[column]);
    }
   }
   // color indexing
   colorIndex = 0;
   colorShemaAdd():string{
      if(this.colorIndex == this.colorsArray.length - 1){
        this.colorIndex = 0;
      }
      let color = this.colorsArray[this.colorIndex];
      this.colorIndex ++;
      return color;
   }


   // chart drawing 
   chartDrawWithData(data:ChartDataObj){
     // create table
    let dataTable = new google.visualization.arrayToDataTable(this.dynamicColumnAdd(data));
    let options = data.chartTypeWill == ChartTypes.Pie?this.pieChartOptions:data.chartTypeWill == ChartTypes.Donut?this.donutPieChartOptions:this.chartOptions;
    options.title = data.title?data.title:''; 
    options.width = this.platform.width();
    options.isStacked = data.dataValueColumnsName.length > 1 && (data.chartTypeWill == ChartTypes.Bar ||data.chartTypeWill == ChartTypes.Column)?true:false
    // options choose & drw
      if(data.chartTypeWill == ChartTypes.Bar || data.chartTypeWill == ChartTypes.StackBar){
        var chart = new google.visualization.BarChart(document.getElementById(data.chartTypeWill));
        chart.draw(dataTable, options);
      }
      else if(data.chartTypeWill == ChartTypes.Pie || data.chartTypeWill == ChartTypes.Donut){
        var chart = new google.visualization.PieChart(document.getElementById(data.chartTypeWill));
        chart.draw(dataTable, options);
      }
      else if(data.chartTypeWill == ChartTypes.Column || data.chartTypeWill == ChartTypes.StackColumn){
        var chart = new google.visualization.ColumnChart(document.getElementById(data.chartTypeWill));
        chart.draw(dataTable, options);
      }
   }


   drawChart(data){
    this.initChart(this.chartDrawWithData.bind(this,data));
   }
}
