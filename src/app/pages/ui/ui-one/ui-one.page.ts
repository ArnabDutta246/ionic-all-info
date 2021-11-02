import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-ui-one',
  templateUrl: './ui-one.page.html',
  styleUrls: ['./ui-one.page.scss'],
})
export class UiOnePage implements OnInit {
  @ViewChild(IonContent,{read:ElementRef,static:true}) contentArea:ElementRef;
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
  constructor(private renderer:Renderer2) { }

  ngOnInit() {

    this.callTheObserver();
  }
  handleEvent(ev){
    console.log('this ion content is scrolling',ev)
  }

  // using interception observer
  callTheObserver(){
    this.observer = new IntersectionObserver(entries=>{
      entries.forEach((entry:any)=>{
        if(entry.isIntersecting){
          // do ode
          console.log("trigger elements add transform");
          this.renderer.addClass(this.contentArea.nativeElement, "no-transform");
        }else{
          // do if not
          console.log("remove transform");
          this.renderer.removeClass(this.contentArea.nativeElement,"no-transform");
        }
      })
    });

    // another
    this.observer.observe(this.triggerElemnets.nativeElement);
  }
}
