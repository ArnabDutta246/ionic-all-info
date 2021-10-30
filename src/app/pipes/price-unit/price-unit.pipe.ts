import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceUnit'
})
export class PriceUnitPipe implements PipeTransform {

  transform(value, ...args: unknown[]): unknown {
    console.log(value,args);
  
    return this.addComma(value);
  }
  // price
  // INR 100,00,00,000
  // add comma to number
  addComma(price:number|string):string|number{
    return price.toLocaleString('en-IN', {style:'currency', currency:'INR'})+" " +this.getUnit(price);
  }
  
  getUnit(price){
    let unit:string = '';
    if(price<100000 && price > 999){unit = 'k'; return unit;} 
    else if(price<10000000 && price > 99999){ unit = "lac";return unit;}
    else if(price > 9999999) { unit = "Cr"; return unit;} 
    else if(price <1000) { unit = ""; return unit;} 
  }

}
