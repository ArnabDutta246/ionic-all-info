import { Component, OnInit } from '@angular/core';
import { concat, interval, merge, of } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.page.html',
  styleUrls: ['./rxjs.page.scss'],
})
export class RxjsPage implements OnInit {
   // api link
   url:string = "https://jsonplaceholder.typicode.com/posts";
   getSinglePost:string = `https://jsonplaceholder.typicode.com/posts/1`;

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
      console.log("count 1",res);
    },err=>console.log(err),()=>console.log("takeExampleOne Completed 1"))
    takeFive.subscribe((res)=>{
      console.log("count 2",res);
    },err=>console.log(err),()=>console.log("takeExampleOne Completed 2"))
  }
  // takeWhile
  // takeLast
  // takeUntill
  // tap
  // concatMap
  // catchError
  // 

  // Map operator
    mapOperator = ()=>{
      of(1,2,3).pipe(
        tap(()=>{console.log("get the stream")}),
        map((numberAll)=>numberAll * 2),
      ).subscribe(res=>{
        console.log("after multiply result",res)
      })
    }
   
   // margermap vs SwitchMap vs ConcatMap vs ExhaustMap

   // concat 
   concatExample = () =>{
     const obs1$ = of(1,2,3);
     const obs2$ = of(2,3,4);
     concat(obs1$,obs2$).subscribe(res=>{
       console.log("after concat actions",res);
     })
   }

   // merge
   mergeExample = () =>{
     const obs1$ = interval(1000).pipe(map(val=>val*10));
     const obs2$ = interval(1000).pipe(map(val=>val*100));
     const result$ = merge(obs1$,obs2$).subscribe(res=>{console.log("after merge",res)});
   }

}
