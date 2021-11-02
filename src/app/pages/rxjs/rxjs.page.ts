import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.page.html',
  styleUrls: ['./rxjs.page.scss'],
})
export class RxjsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // margeMap
  // rxjs operator

  // switchMap
  // switch map operator


  // pipe
  // map
  // take
  // this emits only the first count valus emitted by the sources Observable
  // examples
  takeExampleOne(){
    const intervalCount = interval(1000);
    const takeFive = intervalCount.pipe(take(5));
    takeFive.subscribe((res)=>{
      console.log("count",res);
    },err=>console.log(err),()=>console.log("takeExampleOne Completed"))
  }
  // takeWhile
  // takeLast
  // tap

}
