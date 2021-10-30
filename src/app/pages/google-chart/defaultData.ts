import { ChartDataObj, ChartOptions, ChartTypes } from "./googleChart.modal";




export const BarChartData:ChartDataObj = {
    title:"Shop Qunatity with items",
    dataBaseColumnName:"item",
    dataValueColumnsName:["quantity"],
    annotation:true,
    style:true,
    chartTypeWill:ChartTypes.Bar,
    dataArray:[
      {
        salesId:1,
        item:"Mushrooms",
        quantity:3,
      },
      {
        salesId:2,
        item:"Onions",
        quantity:5,
      },
      {
        salesId:3,
        item:"Olives",
        quantity:13,
      },
      {
        salesId:1,
        item:"Pepperoni",
        quantity:2,
      }
    ]
}
export const ColumnBarChartData:ChartDataObj = {
  title:"Monthly sales report",
  dataBaseColumnName:"salesMonth",
  dataValueColumnsName:["laptop",],
  annotation:true,
  style:true,
  chartTypeWill:ChartTypes.Column,
  dataArray:[
    {
      salesMonth:"January",
      laptop:5,
    },
    {
      salesMonth:"February",
      laptop:15,
    },
    {
      salesMonth:"March",
      laptop:7,
    },
    {
      salesMonth:"April",
      laptop:9,
    }
  ]
}

export const StackBarChartData:ChartDataObj = {
  title:"Mutiple sales report",
  dataBaseColumnName:"salesMonth",
  dataValueColumnsName:["laptop","mobile","tv"],
  annotation:true,
  style:false,
  chartTypeWill:ChartTypes.StackBar,
  dataArray:[
    {
      salesMonth:"January",
      laptop:5,
      mobile:10,
      tv:4,
    },
    {
      salesMonth:"February",
      laptop:15,
      mobile:6,
      tv:9,
    },
    {
      salesMonth:"March",
      laptop:7,
      mobile:8,
      tv:9,
    },
    {
      salesMonth:"April",
      laptop:9,
      mobile:5,
      tv:5,
    }
  ]
}

export const StackColumnChartData:ChartDataObj = {
  title:"Mutiple sales report",
  dataBaseColumnName:"salesMonth",
  dataValueColumnsName:["laptop","mobile","tv"],
  annotation:true,
  style:false,
  chartTypeWill:ChartTypes.StackColumn,
  dataArray:[
    {
      salesMonth:"January",
      laptop:5,
      mobile:10,
      tv:4,
    },
    {
      salesMonth:"February",
      laptop:15,
      mobile:6,
      tv:9,
    },
    {
      salesMonth:"March",
      laptop:7,
      mobile:8,
      tv:9,
    },
    {
      salesMonth:"April",
      laptop:9,
      mobile:5,
      tv:5,
    }
  ]
}

export const ChartOptionDefault:ChartOptions = {
  title:"Some default title",
  width:340,
  height:300,
 // legend:{position:"none"},
   legend:{position:"bottom",maxLines:3},
  bar:{groupWidth:"84%"}, // width of bar lines,
 // chartArea:{left:10,width:"100%"}
 isStacked:true,
}


export const PieChartData:ChartDataObj = {
  title:"Shop Qunatity with items",
  dataBaseColumnName:"item",
  dataValueColumnsName:["quantity"],
  annotation:true,
  style:true,
  chartTypeWill:ChartTypes.Pie,
  dataArray:[
    {
      salesId:1,
      item:"Mushrooms",
      quantity:3,
    },
    {
      salesId:2,
      item:"Onions",
      quantity:5,
    },
    {
      salesId:3,
      item:"Olives",
      quantity:13,
    },
    {
      salesId:1,
      item:"Pepperoni",
      quantity:2,
    }
  ]
}
export const DonutPieChartData:ChartDataObj = {
  title:"Shop Qunatity with items",
  dataBaseColumnName:"item",
  dataValueColumnsName:["quantity"],
  annotation:true,
  style:true,
  chartTypeWill:ChartTypes.Donut,
  dataArray:[
    {
      salesId:1,
      item:"Mushrooms",
      quantity:3,
    },
    {
      salesId:2,
      item:"Onions",
      quantity:5,
    },
    {
      salesId:3,
      item:"Olives",
      quantity:13,
    },
    {
      salesId:1,
      item:"Pepperoni",
      quantity:2,
    }
  ]
}

export const DonutPieChartOptions:ChartOptions = {
  title:"Some default title",
  width:340,
  height:300,
 // legend:{position:"none"},
   legend:{position:"bottom",maxLines:3},
   pieHole:0.4,
}
export const PieChartOptions:ChartOptions = {
  title:"Some default title",
  width:340,
  height:300,
 // legend:{position:"none"},
   legend:{position:"bottom",maxLines:3},
   pieHole:0,
}