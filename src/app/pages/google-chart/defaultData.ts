import { ChartColumn } from "./googleChart.modal";

export const PieChartData:ChartColumn = {
    dataTiteColumnName:"item",
    dataValueColumneName:["quantity"],
    annotation:true,
    dataArray:[
      {
        salesId:1,
        item:"Mushrooms",
        quantity:"3",
      },
      {
        salesId:2,
        item:"Onions",
        quantity:"5",
      },
      {
        salesId:3,
        item:"Olives",
        quantity:"13",
      },
      {
        salesId:1,
        item:"Pepperoni",
        quantity:"2",
      }
    ]
}