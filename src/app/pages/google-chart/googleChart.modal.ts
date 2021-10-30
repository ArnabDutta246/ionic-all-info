export interface ChartDataObj{
    dataBaseColumnName:string;
    dataValueColumnsName:string[];
    annotation:boolean;
    style:boolean;
    dataArray:any[];
    title?:string;
    options?:ChartOptions;
    chartTypeWill:string;
    height?:number;
    width?:number;
}       
export interface ChartOptions{
  title:string;
  width:number;
  height?:number;
  bar?:{groupWidth:string;};
  legend?:{position:string,maxLines?:number};
  isStacked?:boolean|string;
  pieHole?:number;
}

export enum ChartTypes{
    Bar = "barChart-div",
    StackBar = "stackbarChart-div",
    Pie = "pieChart-div",
    Donut = "donutChart-div",
    Column = "columnChart-div",
    StackColumn = "stackColumnChart-div",
}
// bar chart style
// color
// opacity
// fill-color
// fill-opacity
// stroke-color
// stroke-opacity
// stroke-width