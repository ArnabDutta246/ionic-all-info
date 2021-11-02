import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, concat, interval, merge, observable, Observable, of, Subject, throwError, zip } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap, shareReplay, take, tap } from 'rxjs/operators';

interface Order {
  amount:number;
  customerId:number;
}
interface Product{
product:Durum;
customerId:number;
}
type Durum = ["meat","bread","cabbage"];
let customerId:number = 0;
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.page.html',
  styleUrls: ['./rxjs.page.scss'],
})
export class RxjsPage implements OnInit {
   // api link
   url:string = "https://jsonplaceholder.typicode.com/posts";
   getSinglePost:string = `https://jsonplaceholder.typicode.com/posts/1`;
    _orders = new Subject<Order>();
    delivery$:Observable<Product>;
    durum$:Observable<Durum>;

  // subjects
  _meat = new Subject<"meat">();
  _bread = new Subject<"bread">();
  _cabbage = new Subject<"cabbage">();
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {

    // Zip  work when all observables are init and get value
    this.durum$ = zip(
      this._meat,
      this._bread,
      this._cabbage
    ).pipe(
      tap((result)=>{console.log(result)})
    );
   // 
   this.delivery$ = this._orders.pipe(
     tap((order)=>console.log(order)),
     mergeMap(
    ({amount,customerId})=>this.durum$.pipe(
     take(amount),
     map(durum=>({
       product:durum,
       customerId
     }))
      )
    ),
     tap((product)=>console.log("delivery product",product))
   )
  }
  dispacthOrder(){
    const amount = Math.floor(Math.random()*2)+1;
    ++customerId;
    this._orders.next({amount,customerId});
  }


  // geting http return
  getHttpResponse(){
   return this.http.get(this.url).pipe(take(1),shareReplay());
  }
  
  
  // get first respose
  getFirstResponse(){
    this.getHttpResponse().subscribe(res=>{
      console.log("get first reponse",res);
    })
  }
  
  // get second respose
  getSecondRespose(){
    this.getHttpResponse().subscribe(res=>{
      console.log("get second reponse",res);
    })
  }


  // 

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


   // sharereply
   shareReplyExample = () =>{
    const obs = interval(500)
    .pipe(
        take(3),
        tap(i => console.log("obs value "+ i)),
        shareReplay()
    );
    obs.subscribe(value => console.log("observer 1 received " + value));
    obs.subscribe(value => console.log("observer 2 received " + value));
   }

   // take observables example
   takeExample = () =>{
     of(1,2,3,4).pipe(take(1),map(a=>a*2)).subscribe(res=>console.log("take example from stream",res));
   }
  

   // flattering operator in rxjs zip operator 
   // it combines multiple streams
   // put then into one array 
   // then return a single  stream for subscribe 
   //  emiting an stream --> to shop order ---> mergerMap()
   // take moneys and return some food
   // switchMap first order already in progresss and second order and arrived
   // mergeMap can merge multiple order then deliver consecutively
   // but switchMap it close the first the order and start the second order start then complete the all
   // switchMap delivery the final food to both




}
