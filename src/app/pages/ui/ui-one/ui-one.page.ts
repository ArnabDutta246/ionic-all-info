import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ui-one',
  templateUrl: './ui-one.page.html',
  styleUrls: ['./ui-one.page.scss'],
})
export class UiOnePage implements OnInit {
@ViewChild('triggerElements',{read:ElementRef,static:true}) triggerElemnets:ElementRef;
  private observer: IntersectionObserver;
  // data object
  data = {
    image:"",
    name:"",
    rating:"",
    price:"",
    desc:"",
    sizes:"",
  }
  constructor() { }

  ngOnInit() {
  }
  handleEvent(ev){
    console.log('this ion content is scrolling',ev)
  }

  // using interception observer

}
